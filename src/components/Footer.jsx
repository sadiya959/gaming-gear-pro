import SocialMediaIcon from "./SocialMediaIcon";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; 2025 GamingGear Pro. All rights reserved.
        </p>
        <div className="flex gap-6">
          <SocialMediaIcon iconName="twitter" />
          <SocialMediaIcon iconName="facebook" />
          <SocialMediaIcon iconName="instagram" />
          <SocialMediaIcon iconName="youtube" />
        </div>
      </div>
    </footer>
  );
}
