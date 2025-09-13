import { Card, Row, Col, Button } from "antd";
import { FolderOpenOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

// Import default fallback images
import fallback1 from "../Assets/project1.jpg";
import fallback2 from "../Assets/project2.png";
import fallback3 from "../Assets/project3.jpg";
import fallback4 from "../Assets/project4.jpg";

const fallbackImages = [fallback1, fallback2, fallback3, fallback4];

export default function Projects({ projects }) {
  // helper: get project image
  const getImage = (p) => {
    console.log(p)
    try {
      if (p.image) {
        console.log(require(`../Assets/${p.image}`))
        return  require(`../Assets/${p.image}`);
      }
    } catch (e) {
      // if image not found, use fallback
      const randomIndex = Math.floor(Math.random() * fallbackImages.length);
      return fallbackImages[randomIndex];
    }

    // no image property, use fallback
    const randomIndex = Math.floor(Math.random() * fallbackImages.length);
    return fallbackImages[randomIndex];
  };

  return (
    <Card
      id="projects"
      title={<span><FolderOpenOutlined /> Projects</span>}
      style={{ margin: "40px 0", borderRadius: "12px" }}
    >
      <Row gutter={[20, 20]}>
        {projects.map((p, idx) => (
          <Col xs={24} md={12} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                hoverable
                cover={
                  <img
                    alt={p.name}
                    src={getImage(p)}
                    style={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      objectFit: "cover",
                      height: "200px"
                    }}
                  />
                }
                style={{ borderRadius: "10px" }}
              >
                <Card.Meta title={p.name} description={p.description} />
                <Button
                  type="primary"
                  href={p.link}
                  target="_blank"
                  style={{ marginTop: "15px" }}
                >
                  View Project
                </Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Card>
  );
}
