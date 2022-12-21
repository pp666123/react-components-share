import Highlight from "react-highlight";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SweetAlert = () => {
  const MySwal = withReactContent(Swal);
  const sweetAlertClickHandler = () => {
    MySwal.fire({
      title: "Loading...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 2000,
      didOpen: () => {
        Swal.showLoading();
        //call api
      },
    }).then((result) => {
      if (result) {
        MySwal.fire({
          title: "complete!",
          icon: "success",
        });
      } else {
        MySwal.fire({
          title: "oops... something wrong!",
          icon: "error",
        });
      }
    });
  };
  return (
    <>
      <h2 className='mt-0 text-decoration-underline'>sweet-alert-2</h2>
      <h3>yarn add sweetalert2-react-content sweetalert2</h3>
      <h3 className='text-decoration-underline mt-3'>demo</h3>
      <button
        type='button'
        class='btn btn-light'
        onClick={sweetAlertClickHandler}
      >
        SweetAlert2 Click me!
      </button>

      <h3 className='mt-0 text-decoration-underline mt-3'>code</h3>
      <div className='text-start w-80 d-flex justify-content-center'>
        {/* <Highlight language='javascript'>{`
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const SweetAlertButton = ()=>{
const MySwal = withReactContent(Swal);
const sweetAlertClickHandler = () => {
    MySwal.fire({
      title: "Loading...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 2000,
      didOpen: () => {
        Swal.showLoading();
        //call api
      },
    }).then((result) => {
      if (result) {
        MySwal.fire({
          title: "complete!",
          icon: "success",
        });
      } else {
        MySwal.fire({
          title: "oops... something wrong!",
          icon: "error",
        });
      }
    });
  };
  return(
    <button
    type='button'
    class='btn btn-light'
    onClick={sweetAlertClickHandler}
  >
    SweetAlert2 Click me!
  </button>
  )
}
        `}</Highlight> */}
      </div>
      <hr className='h-80-vw' />
    </>
  );
};

export default SweetAlert;
