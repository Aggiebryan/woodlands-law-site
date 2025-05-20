
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const timelineSteps = [
  {
    month: "Month 1",
    title: "Case Intake & Investigation",
    description: "Initial consultation, signing of representation agreement, gathering of evidence, accident reports, and preliminary medical records."
  },
  {
    month: "Months 2-3",
    title: "Medical Treatment",
    description: "You focus on your medical treatment while we monitor your progress, communicate with providers, and continue building your case file."
  },
  {
    month: "Months 4-5",
    title: "Medical Records Collection",
    description: "We collect and review all medical records, bills, and documentation of your injuries and treatment."
  },
  {
    month: "Month 6",
    title: "Demand Package Preparation",
    description: "We prepare and submit a comprehensive demand package to the insurance company outlining your damages and compensation request."
  },
  {
    month: "Months 7-8",
    title: "Negotiations",
    description: "We engage in settlement negotiations with the insurance company, keeping you informed of all offers and counteroffers."
  },
  {
    month: "Month 9",
    title: "Resolution or Litigation Decision",
    description: "If a fair settlement is reached, we finalize your case. If not, we prepare to file a lawsuit."
  },
  {
    month: "Months 10-18",
    title: "Litigation Process",
    description: "If necessary, we file a lawsuit, engage in discovery, take depositions, and prepare for trial or mediation."
  },
  {
    month: "Months 18-24",
    title: "Trial or Final Resolution",
    description: "Your case concludes with either a trial verdict or final settlement agreement, and compensation is disbursed."
  }
];

const InjuryCaseTimeline = () => {
  return (
    <section className="py-16 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">
            Personal Injury Case Timeline
          </h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            While every case is unique, this timeline provides a general overview of what to expect during the personal injury claim process. Our goal is to resolve your case efficiently while maximizing your compensation.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <Carousel className="w-full">
            <CarouselContent>
              {timelineSteps.map((step, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-t-4 border-law-gold">
                      <CardContent className="p-6">
                        <p className="text-law-gold font-semibold mb-2">{step.month}</p>
                        <h3 className="text-lg font-serif text-law-purple mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static translate-y-0 left-0 bg-law-purple text-white hover:bg-law-purple-light" />
              <CarouselNext className="relative static translate-y-0 right-0 bg-law-purple text-white hover:bg-law-purple-light" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InjuryCaseTimeline;
