import { Typography, Card, Row, Col } from "antd";
import { motion } from "framer-motion";
import ProfilePic from "../Assets/propic.jpeg";

const { Title, Paragraph } = Typography;

export default function Hero({ name, title, about }) {
  return (
    <Card
      id="hero"
      bordered={false}
      style={{
        marginBottom: "40px",
        padding: "50px",
        background: "linear-gradient(135deg, #f0f5ff, #e6f7ff)",
        borderRadius: "16px",
      }}
    >
      <Row gutter={32} align="middle">
        {/* Profile Image */}
        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <motion.img
            src={ProfilePic} 
            alt="Profile"
            style={{
              width: "220px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "6px solid white",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </Col>

        {/* Intro Text */}
        <Col xs={24} md={16}>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={2}>{name}</Title>
            <Title level={4} type="secondary">
              {title}
            </Title>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.8" }}>
              {about}
            </Paragraph>
          </motion.div>
        </Col>
      </Row>
    </Card>
  );
}
