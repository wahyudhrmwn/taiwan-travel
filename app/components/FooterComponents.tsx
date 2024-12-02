import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export const FooterComponents = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
      <div>Contact Us</div>
      <div>Phone: 02-77471792</div>
      <div>Address: 12F, No.77, Sec. 4, Nanjing E. Rd., Taipei</div>
      <div className="mt-4">
        <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 text-red-500" />
      </div>
      <div className="mt-4">©2023 Rhyan Taiwan All Rights Reserved.</div>
    </footer>
  );
};
