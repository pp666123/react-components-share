import { useState } from "react";
import { useForm } from "react-hook-form";

const DemoReactHookForm = () => {
  const [dataHook, setDataHook] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sentClickHandler = () => {
    handleSubmit((data) => {
      setDataHook(data);
    })();
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className='w-50 d-flex flex-column justify-content-center'>
        <input
          type='text'
          placeholder='First name'
          className={`${errors?.firstName?.type === "required" && "input-required-error"}`}
          {...register("firstName", { required: true })}
        />
        <input
          type='text'
          placeholder='Last name'
          {...register("lastName")}
        />
        <button
          className='btn btn-dark'
          onClick={sentClickHandler}
        >
          送出
        </button>
        <div>firstName: {dataHook.firstName}</div>
        <div>lastName: {dataHook.lastName}</div>
      </div>
    </div>
  );
};

export default DemoReactHookForm;
