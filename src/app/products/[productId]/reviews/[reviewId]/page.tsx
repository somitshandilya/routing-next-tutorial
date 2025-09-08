import { notFound } from "next/navigation";
// import { Review } from "@/types";
export default async function Review({ params }: { params: { productId: string,
 reviewId: string }
 } ) {
    const productId = await params.productId;
    const reviewId = await params.reviewId;
    if (!productId || reviewId === "3") {
        notFound();
    }
    return (
        <div>
            <h1>Review for product {params.productId} and review {params.reviewId}</h1>
        </div>
    );
}