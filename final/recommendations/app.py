from flask import Flask
import engine
app = Flask(__name__)

@app.route("/api/v1.0/recommendations/<int:id>", methods=["GET"])
def get_recomendations(id):
    # print("product_id: " + str(id))
    return engine.get_recommendations(id)

if __name__ == "__main__":
    app.run()

# In node:
#   app.get('/export', function(req, res)
#     {
#         var spawn = require('child_process').spawn,
#         ls = spawn('mongoexport',['--db','monopoly','--collection','newYork']);
#         res.sendfile('/home/database.csv') 

#     });