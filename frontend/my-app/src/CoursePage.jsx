import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Container, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class CoursePage extends Component {

  constructor(props) {
		super(props);
    this.state = { courseData: {} };
	}

	componentDidMount() {
    var cname = this.props.match.params.coursename;

		// axios.get('http://localhost:5000/')
		// 		.then(res => {
		// 				this.setState({ courseData: res.data });
		// 		})
		// 		.catch(function (error) {
		// 				console.log(error);
    // 		});
    
    this.setState({ 
      courseData: { 
        'img': cname + '.jpg',
        'courseName': cname,
        'courseDesc': cname.repeat(50)
      }
    });
	}

  render() {
    var cdata = this.state.courseData
    if (Object.keys(cdata).length > 0) {
      return(
      <Container>
        <Jumbotron>
          <img style={{display: "block", marginLeft: "auto", marginRight: "auto"}} src={require('./' + cdata['img'])} alt="" />
        </Jumbotron>
        <Col xs={12} sm={8} smoffset={2}>
            <h2>{cdata['courseName']}</h2>
            <p>{cdata['courseDesc']}</p>
        </Col>
			</Container>);
    }
    return(<div></div>);
  }
}

export default withRouter(CoursePage);