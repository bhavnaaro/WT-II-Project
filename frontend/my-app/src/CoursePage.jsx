import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Container, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class CoursePage extends Component {

  constructor(props) {
		super(props);
    this.state = { courseData: {}, enrollStatus: "unenrolled" };
    this.handleEnroll = this.handleEnroll.bind(this);
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
      },
      enrollStatus: this.state.enrollStatus
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.enrollStatus==="enrolling") {
      // axios.get('http://localhost:5000/')
      // 		.then(res => {
      // 				this.setState({
      //          courseData: this.state.courseData,
      //          enrollStatus: "enrolled"
      //        });
      // 		})
      // 		.catch(function (error) {
      // 				console.log(error);
      // 		});
    }
    return true;
  }
  
  handleEnroll(e) {
    e.preventDefault();
    this.setState({
      courseData: this.state.courseData,
      enrollStatus: "enrolling"
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
            <Button size="lg" block variant="dark" 
              disabled={this.state.enrollStatus!=="unenrolled"} 
              onclick={(this.state.enrollStatus==="unenrolled")?handleEnroll:null} 
            >
              {(this.state.enrollStatus==="unenrolled") ? "Enroll" : ((this.state.enrollStatus==="enrolling") ? "Enrolling" : "Enrolled")}
            </Button>
        </Col>
			</Container>);
    }
    return(<div></div>);
  }
}

export default withRouter(CoursePage);