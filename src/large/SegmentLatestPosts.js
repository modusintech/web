import React from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

import SmallPost from "../medium/SmallPost"

import SectionTitle from "../small/SectionTitle"

const POSTS = [
  {
    id: 10,
    title: "One One One",
    image: {
      title: "Abstract",
      url: "http://localhost:3000/images/posts/abstract.jpg"
    },
    author: {
      name: "One Punch Man"
    }
  },
  {
    id: 20,
    title: "Two Two Two",
    image: {
      title: "Abstract",
      url: "http://localhost:3000/images/posts/abstract.jpg"
    },
    author: {
      name: "Two Times"
    }
  },
  {
    id: 30,
    title: "Three Three Three",
    image: {
      title: "Abstract",
      url: "http://localhost:3000/images/posts/abstract.jpg"
    },
    author: {
      name: "Three Tree"
    }
  }
]

const SegmentLatestPosts = props => {
  // console.log("SegmentLatestPosts.props", props)

  return (
    <Row id="SegmentLatestPosts" xs={8}>
      <Col xs={12}>
        <Link to="/posts">
          <SectionTitle>Latest posts for you</SectionTitle>
        </Link>
      </Col>
      {POSTS.map((post, index) => {
        return (
          <Col key={index} xs={12} md={8} lg={6}>
            <SmallPost post={post} />
          </Col>
        )
      })}
    </Row>
  )
}

export default SegmentLatestPosts
