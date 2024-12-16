import { testimonials } from '@/constants';
import { SectionHeader } from '../custom/section-header';
import { TestimonialsCard } from '../custom/testimonials-card';

export const Testimonials = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    label="Happy Clients"
                    title="What Clients Say About Me"
                    description=" Don't just take my word for it. See what my clients have to say about my work."
                />

                <div className="mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-24">
                    <div className="flex flex-none gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <TestimonialsCard key={idx} data={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
