import { Card, Typography } from "antd";
import { MailOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

export default function Contact() {
  return (
    <Card
      id="contact"
      title="Contact"
      style={{ marginBottom: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
    >
      <Paragraph>
        <MailOutlined /> Email: <a href="mailto:nayanajanan7@gmail.com">
          nayanajanan7@gmail.com
        </a>
      </Paragraph>
      <Paragraph>
        <LinkedinOutlined /> LinkedIn: <a href="https://linkedin.com/in/nayana-janardhanan-7478a01b6" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/yourprofile
        </a>
      </Paragraph>
    </Card>
  );
}
