import { Card, Tag } from "antd";
import { CodeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

export default function Skills({ skills }) {
  return (
    <Card
      id="skills"
      title={<span><CodeOutlined /> Skills</span>}
      style={{ margin: "40px 0", borderRadius: "12px" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Tag color="blue" style={{ fontSize: "16px", padding: "10px 18px" }}>
              {skill}
            </Tag>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
}
