import React from "react"
import { Row, Col } from "reactstrap"

import Logo from "../small/Logo"
import SearchBox from "../small/SearchBox"
import CTAButtons from "../medium/CTAButtons"
import CTAAvatar from "../small/CTAAvatar"

const account = {
  name: "M Haidar Hanif",
  username: "mhaidarh",
  image_url: "http://localhost:3000/images/avatars/mhaidarh.jpg"
}

const SegmentCTAHeader = props => (
  <Row id="SegmentCTAHeader" className="center">
    <Col xs={8} md={5}>
      <Logo />
    </Col>
    <Col xs={4} md={3} className="column right">
      <SearchBox />
    </Col>
    <Col xs={12} md={4} className="column right">
      <CTAButtons />
      <CTAAvatar to={`/profile/${account.username}`} account={account} />
    </Col>
  </Row>
)

export default SegmentCTAHeader
