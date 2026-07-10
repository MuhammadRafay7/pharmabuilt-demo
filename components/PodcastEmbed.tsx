import { PODCAST_EMBED_ID } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function PodcastEmbed() {
  return (
    <section className="container-page py-20 sm:py-28">
      <SectionHeading
        eyebrow="Learn More About Us"
        title={
          <>
            Maximizing <span className="text-brand-green">Healthspan</span>
          </>
        }
        subtitle="FOF 185 | John Linss on the science of longevity, evidence-based supplementation, and building a practice patients trust."
      />
      <Reveal className="mx-auto mt-12 max-w-4xl">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${PODCAST_EMBED_ID}`}
              title="FOF 185 | John Linss. Maximizing Healthspan."
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
