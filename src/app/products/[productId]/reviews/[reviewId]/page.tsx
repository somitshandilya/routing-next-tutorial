export default function Review({ params }: { params: { productId: string,
 reviewId: string }
 } ) {
    return (
        <div>
            <h1>Review for product {params.productId} and review {params.reviewId}</h1>
        </div>
    );
}