
import { Link } from "react-router-dom";

const TrustsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-law-navy py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">Trust Services</h1>
            <div className="gold-underline mx-auto mb-6"></div>
            <p className="text-white/80 text-lg md:text-xl">
              Expert guidance in creating and administering trusts to protect your assets and secure your legacy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-law-navy mb-6">
              What is a Trust?
            </h2>
            
            <p className="text-gray-700 mb-6">
              A trust is a legal arrangement where one party, known as the trustor or grantor, 
              gives another party, the trustee, the right to hold title to property or assets for 
              the benefit of a third party, the beneficiary. Trusts are established to provide legal 
              protection for the trustor's assets, to ensure those assets are distributed according 
              to the trustor's wishes, and to save time, reduce paperwork, and, in some cases, avoid 
              or reduce inheritance or estate taxes.
            </p>

            <div className="bg-law-gray-light p-6 rounded-lg mb-10">
              <h3 className="text-xl font-serif font-medium text-law-navy mb-3">
                Benefits of Establishing a Trust
              </h3>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Avoids probate, keeping the transfer of assets private</li>
                <li>Provides protection against incapacity</li>
                <li>Offers control over asset distribution</li>
                <li>May reduce estate taxes</li>
                <li>Protects assets from creditors</li>
                <li>Can provide for minor children or family members with special needs</li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-medium text-law-navy mb-6">
              Types of Trusts We Handle
            </h2>

            <div className="space-y-8 mb-10">
              <TrustType 
                title="Revocable Living Trusts" 
                description="A flexible trust that allows you to maintain control over your assets during your lifetime and specifies how your assets should be managed upon your incapacity or death." 
              />
              
              <TrustType 
                title="Irrevocable Trusts" 
                description="Once established, these trusts cannot be altered, offering strong asset protection and potential tax benefits." 
              />
              
              <TrustType 
                title="Special Needs Trusts" 
                description="Designed to provide for the needs of a disabled beneficiary while preserving their eligibility for government benefits." 
              />
              
              <TrustType 
                title="Charitable Trusts" 
                description="Allows you to leave all or part of your assets to a charitable organization while potentially offering income and tax benefits." 
              />
              
              <TrustType 
                title="Asset Protection Trusts" 
                description="Structured to protect your assets from future creditors, lawsuits, or judgments." 
              />
              
              <TrustType 
                title="Spendthrift Trusts" 
                description="Protects the assets you leave to a beneficiary from their creditors or their own spending habits." 
              />
            </div>

            <h2 className="text-3xl font-serif font-medium text-law-navy mb-6">
              Trust Administration Services
            </h2>
            
            <p className="text-gray-700 mb-8">
              After a trust is established, it must be properly administered. Our attorneys provide 
              comprehensive trust administration services, including:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <ServiceItem text="Assisting trustees in understanding their fiduciary duties" />
              <ServiceItem text="Managing trust assets and investments" />
              <ServiceItem text="Handling required accounting and tax matters" />
              <ServiceItem text="Distributing assets to beneficiaries" />
              <ServiceItem text="Resolving disputes among beneficiaries" />
              <ServiceItem text="Representing trustees in legal proceedings" />
            </ul>

            {/* CTA */}
            <div className="bg-law-navy p-8 rounded-lg text-center">
              <h3 className="text-2xl font-serif font-medium text-white mb-4">
                Ready to Establish or Administer a Trust?
              </h3>
              
              <p className="text-white/80 mb-6">
                Schedule a consultation with one of our experienced trust attorneys to discuss your specific needs.
              </p>
              
              <Link 
                to="/contact" 
                className="bg-law-gold hover:bg-law-gold-light text-law-navy font-medium py-3 px-8 rounded transition-colors inline-block"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TrustTypeProps {
  title: string;
  description: string;
}

const TrustType = ({ title, description }: TrustTypeProps) => (
  <div className="border-l-4 border-law-gold pl-6">
    <h3 className="text-xl font-serif font-medium text-law-navy mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

interface ServiceItemProps {
  text: string;
}

const ServiceItem = ({ text }: ServiceItemProps) => (
  <div className="flex items-center p-4 bg-law-gray-light rounded">
    <div className="h-2 w-2 rounded-full bg-law-gold mr-3"></div>
    <p className="text-gray-700">{text}</p>
  </div>
);

export default TrustsPage;
