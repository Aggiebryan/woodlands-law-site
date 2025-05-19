
interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="bg-law-purple py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">{title}</h1>
        <p className="text-white/80 max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
