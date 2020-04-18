# for reading and manipulation of our datasets
import pandas as pd
# for mongo and python interaction
#from pymongo import MongoClient

# parameter here is id of the course that the customer buys
def get_recommendations(id):
    orders = pd.read_csv("OrderProduct.csv")
    '''
    #point the client at mongo URI
    client = MongoClient('Mongo URI')

    #select database
    db = client['database_name']

    #select the collection within the database
    test = db.test

    #convert entire collection to Pandas dataframe
    orders = pd.DataFrame(list(test.find()))
    '''
    # only retrieving the unique orders who's id match input parameter id
    orders_for_product = orders[orders.product_id == id].order_id.unique()

    # getting only those rows from the dataset that have the right id
    relevant_orders = orders[orders.order_id.isin(orders_for_product)]
    accompanying_products_by_order = relevant_orders[relevant_orders.product_id != id]

    # number of of instances in which these additional courses were purchased. Basically, getting the accompanying courses:
    num_instance_by_accompanying_product = accompanying_products_by_order.groupby(
        "product_id")["product_id"].count().reset_index(name="instances")

    # making a new dataframe that takes the top three results by frequency
    num_orders_for_product = orders_for_product.size
    product_instances = pd.DataFrame(num_instance_by_accompanying_product)
    product_instances["frequency"] = product_instances["instances"]/num_orders_for_product

    # final recommendation dataframe
    recommended_products = pd.DataFrame(
        product_instances.sort_values("frequency", ascending=False).head(3))

    products = pd.read_csv("Product.csv")
    recommended_products = pd.merge(
        recommended_products, products, on="product_id")
    return recommended_products.to_json(orient="table")
