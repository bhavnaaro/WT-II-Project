import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class CoursePage extends Component {

  constructor(props) {
		super(props);
    this.state = { courseData: {}};
	}

	componentDidMount() {
    var cname = this.props.match.params.coursename;

		axios.get('http://localhost:5000/course/'+cname)
				.then(res => {
						this.setState({ courseData: res.data });
				})
				.catch(function (error) {
						console.log(error);
    		});
  }

  render() {
    var cdata = this.state.courseData
    if (Object.keys(cdata).length > 0) {
      return(
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={4}>
            <img style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "100%"}} src={require('../images/' + cdata['courseName']+".jpg")} alt="" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={10}>
            <h1>{cdata['courseName']}</h1><br/><br/>
            <div>
              {cdata['desc'].split('\\n').map((item, i) => <p key={i}>{item}</p>)}
            </div>
            <Button block variant="outline-primary">Enroll Now</Button>
          </Col>
        </Row>
			</Container>);
    }
    return(<div></div>);
  }
}

export default withRouter(CoursePage);