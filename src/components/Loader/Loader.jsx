import { Oval } from "react-loader-spinner";

export const Loader = () => {
	return (
    <Oval
      height={200}
      width={200}
      color="#5736A3"
      wrapperStyle={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#5736A3"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}