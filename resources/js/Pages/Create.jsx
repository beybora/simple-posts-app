import { useForm } from "@inertiajs/react";
import React from "react";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({ body: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/posts");
    };

    console.log(errors);

    return (
        <>
            <h1 className="title">Create</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit}>
                    <textarea
                        rows="10"
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea>

                    {errors.body && (
                        <span className="error"> {errors.body} </span>
                    )}

                    <button
                        type="submit"
                        className="primary-btn mt-4"
                        disable={processing}
                    >
                        Create
                    </button>
                </form>
            </div>
        </>
    );
}
