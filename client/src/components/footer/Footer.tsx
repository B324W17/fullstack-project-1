import { Box, Icon, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Box className="footer-icons">
        <Icon style={{ color: "green" }}>
          <FacebookIcon />
        </Icon>
        <Icon style={{ color: "green" }}>
          <TwitterIcon />
        </Icon>
        <Icon style={{ color: "green" }}>
          <InstagramIcon />
        </Icon>
        <Icon style={{ color: "green" }}>
          <YouTubeIcon />
        </Icon>
      </Box>
      <Box className="footer-text">
        <Typography component="p">
          Inspired by our undying love for cats, Purr Cat Shop Online is more
          than a company—it's a community for cat lovers to share in the latest
          and trending cat toys and grooming products.
        </Typography>
        <Typography variant="body2" component="p">
          Netherlands | &euro;{" "}
        </Typography>
      </Box>{" "}
    </div>
  );
}
