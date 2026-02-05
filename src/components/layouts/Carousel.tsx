import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const images = [
    "/images/rr-1.jpg",
    "/images/lx-1.jpg",
    "/images/lm-1.jpg",
    "/images/fr-1.jpg",
    "/images/rr-2.jpg",
  ];

  return (
    <section className="w-full border-b">
      <div className="my-container py-6 relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="py-8">
                  <Card className="overflow-hidden rounded-xl shadow-sm">
                    <CardContent className="relative aspect-ratio: 16/9 p-0">
                      <img
                        className="w-full h-full object-cover"
                        src={img}
                        alt={`Slide ${index + 1}`}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows inside container */}
          <CarouselPrevious
            className="
              absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
              bg-white dark:bg-gray-900 shadow-md rounded-full
              p-2 hover:bg-gray-100 dark:hover:bg-gray-800
              z-10
            "
          />
          <CarouselNext
            className="
              absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
              bg-white dark:bg-gray-900 shadow-md rounded-full
              p-2 hover:bg-gray-100 dark:hover:bg-gray-800
              z-10
            "
          />
        </Carousel>
      </div>
    </section>
  );
}
