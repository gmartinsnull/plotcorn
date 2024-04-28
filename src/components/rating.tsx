import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

export function Rating(props: { rating: number }) {
  if (props.rating === 0) {
    return (
      <div>
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
      </div>
    );
  } else if (props.rating > 0 && props.rating < 1) {
    return (
      <div>
        <StarHalfIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
      </div>
    );
  } else if (props.rating > 1 && props.rating < 2) {
    return (
      <div>
        <StarRateIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
      </div>
    );
  } else if (props.rating > 2 && props.rating < 3) {
    return (
      <div>
        <StarRateIcon className="h-5 w-5" />
        <StarRateIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
      </div>
    );
  } else if (props.rating > 3 && props.rating < 4) {
    return (
      <div>
        <StarRateIcon className="h-5 w-5" />
        <StarRateIcon className="h-5 w-5" />
        <StarRateIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
      </div>
    );
  }  else if (props.rating > 4 && props.rating < 5) {
    return (
      <div>
        <StarRateIcon className="h-5 w-5" />
        <StarRateIcon className="h-5 w-5" />
        <StarRateIcon className="h-5 w-5" />
        <StarRateIcon className="h-5 w-5" />
        <StarBorderIcon className="h-5 w-5" />
      </div>
    );
  } else if (props.rating >= 5) {
    return (
      <div>
        <StarRateIcon className="h-5 w-5" />
        <StarRateIcon className="h-5 w-5" />
        <StarRateIcon className="h-5 w-5" />
        <StarRateIcon className="h-5 w-5" />
        <StarRateIcon className="h-5 w-5" />
      </div>
    );
  } 
}
