import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faJs,
  faNodeJs,
  faReact,
  faHtml5,
  faCss3,
  faBootstrap,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faWind } from "@fortawesome/free-solid-svg-icons"; // For MySQL as an alternative
import PropTypes from "prop-types";

const faGrapQl = {
  prefix: "fac",
  iconName: "graphql",
  icon: [
    400,
    400,
    [],
    "",
    "M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z M39.8 272.2h320.3v16.6H39.8z M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9",
  ],
};
library.add(faGrapQl);

const faMongoDb = {
  prefix: "fac", // custom prefix
  iconName: "mongodb",
  icon: [
    24,
    24,
    [],
    "",
    "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z",
  ],
};

library.add(faMongoDb);

const techIconMap = {
  Javascript: faJs,
  "Node.js": faNodeJs,
  React: faReact,
  HTML5: faHtml5,
  MySQL: faDatabase, // Using a general database icon for MySQL
  CSS: faCss3,
  Bootstrap: faBootstrap,
  GitHub: faGithub,
  GraphQL: faGrapQl,
  MongoDB: faMongoDb,
  TailwindCSS: faWind,
};

const TechIcon = ({ techName, size = "1x", color = "currentColor" }) => {
  const icon = techIconMap[techName];
  if (!icon) return <span className="text-lighter-gray">{techName}</span>;

  return (
    <div className="flex flex-row items-center gap-2">
      <FontAwesomeIcon icon={icon} size={size} color={color} />
      <span className="text-lighter-gray">{techName}</span>
    </div>
  );
};

TechIcon.propTypes = {
  techName: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default TechIcon;
