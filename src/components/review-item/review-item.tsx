import { ReviewItemType } from '../../types';


type ReviewItemProps = {
  reviewData: ReviewItemType;
}


function ReviewItem({ reviewData }: ReviewItemProps): JSX.Element {
  const ratingInStarsFormat: string = String(parseInt(reviewData.rating, 10) * 20);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {reviewData.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingInStarsFormat}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewData.text}
        </p>
        <time className="reviews__time" dateTime={reviewData.dateTime}>{reviewData.dateLabel}</time>
      </div>
    </li>
  );
}

export default ReviewItem;