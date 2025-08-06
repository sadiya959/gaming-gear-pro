export default function SocialMediaIcon({ iconName }) {
  return (
    <a
      href="#"
      className="cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400"
    >
      <i className={`fab fa-${iconName} text-lg`}></i>
    </a>
  );
}
