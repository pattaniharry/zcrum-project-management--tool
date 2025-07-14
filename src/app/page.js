import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Onboarding from "./onboarding/page";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ArrowUpRight, ChevronRightIcon } from "lucide-react";
import { Layout, Calendar, BarChart } from "lucide-react";
import CompanyCarousel from "components/company-carousel";
import FaqAccordian from "@/components/FaqAccordion";

// const faqs = [
//   {
//     question: "What is ZCRUM?",
//     answer:
//       "ZCRUM is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
//   },
//   {
//     question: "How does ZCRUM compare to other project management tools?",
//     answer:
//       "ZCRUM offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
//   },
//   {
//     question: "Is ZCRUM suitable for small teams?",
//     answer:
//       "Absolutely! ZCRUM is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from ZCRUM's features.",
//   },
//   {
//     question: "What key features does ZCRUM offer?",
//     answer:
//       "ZCRUM provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
//   },
//   {
//     question: "Can ZCRUM handle multiple projects simultaneously?",
//     answer:
//       "Yes, ZCRUM is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes ZCRUM ideal for organizations juggling multiple projects or clients.",
//   },
//   {
//     question: "Is there a learning curve for new users?",
//     answer:
//       "While ZCRUM is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
//   },
// ];

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen ">
      <section className="container mx-auto py-20 text-center ">
        {/*hero section */}
        <h1 className="text 6xl sm:text-7xl lf:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline Your Workflow <br />
          <span className="flex items-center  mx-auto gap-3 sm:gap-4">
            with {""}
            <Image
              src={"/logo2.png"}
              width={400}
              height={80}
              alt="zcrum logo "
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empower your team with our intuititve project management solution.{" "}
        </p>
        <Link href="/Onboarding">
          <Button size="lg" className="mr-4">
            Get started <ChevronRightIcon size={18} />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="outline" className="mr-4">
            Learn More
          </Button>
        </Link>
      </section>

      <section id="features" className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className=" py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      <section className=" bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <FaqAccordian />
        </div>
      </section>

      <section className=" py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Ready to Transform Your WorkFlow?
          </h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using ZCRUM to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button>
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
