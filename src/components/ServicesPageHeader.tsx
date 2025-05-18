
interface ServicesPageHeaderProps {
  title: string;
  description: string;
}

const ServicesPageHeader = ({ title, description }: ServicesPageHeaderProps) => (
  <div className="relative bg-law-purple py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-2">
        {title}
      </h1>
      <div className="gold-underline"></div>
      <p className="text-white/80 max-w-3xl mt-6">
        {description}
      </p>
    </div>
  </div>
);

export default ServicesPageHeader;
