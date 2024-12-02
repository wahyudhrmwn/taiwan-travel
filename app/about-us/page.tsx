// app/[lang]/about-us/page.tsx
export default function AboutUsPage() {
  return (
    <div className="mt-40">
      <div className="mx-64 h-80">
        <div className="flex h-full border-b-2 border-solid border-black">
          <div className="flex-initial w-1/3 content-center bg-about-us bg-contain bg-no-repeat bg-center mr-8"></div>
          <div className="flex-initial w-2/3">
            <div className="w-full block mt-6">
              <div className="font-bold font-sans text-xl">Who we are</div>
              <div>
                {`Tourism brand builders focus on returning to the roots. They are
                committed to connecting people and brands to convey a brand's
                core spirit. They use comprehensive analysis and integration,
                key strategies and communication design to provide targeted
                content value and future direction for a brand's diverse
                development.`}
              </div>
            </div>
            <div className="w-full block mt-6">
              <div className="font-bold font-sans text-xl">What we do</div>
              <div>
                {`We are committed to building a large platform for cross-domain
                integration. We use local culture as a foundation and integrated
                marketing as a method. Deeply rooted urban festivals, tourism
                promotion, and corporate brands allow us to plan the unique
                positioning and core of a brand to reflect customers' brand
                value from the inside out.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
