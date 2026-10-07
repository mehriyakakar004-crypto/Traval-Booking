import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Booking.css";

const schema = yup.object({
  city: yup
    .string()
    .required("City is required"),

  vehicle: yup
    .string()
    .required("Vehicle is required"),

  hotel: yup
    .string()
    .required("Hotel is required"),

  duration: yup
    .string()
    .required("Duration of trip is required"),
});

const Booking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newBooking = {
      id: Date.now(),
      city: data.city,
      vehicle: data.vehicle,
      hotel: data.hotel,
      duration: data.duration,
      createdAt: new Date().toLocaleString(),
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const updatedBookings = [...existingBookings, newBooking];

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    alert("Booking saved successfully!");

    reset();
  };

  return (
    <>
      <Navbar />

      <div className="booking-page">
        <form
          className="booking-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Book Your Trip</h1>

          <input
            type="text"
            placeholder="City"
            {...register("city")}
          />
          <p>{errors.city?.message}</p>

          <select {...register("vehicle")}>
            <option value="">Select Vehicle</option>
            <option value="Airplane">Airplane</option>
            <option value="Bus">Bus</option>
            <option value="Train">Train</option>
            <option value="Car">Car</option>
          </select>
          <p>{errors.vehicle?.message}</p>

          <select {...register("hotel")}>
            <option value="">Select Hotel</option>
            <option value="Economy Hotel">Economy Hotel</option>
            <option value="Standard Hotel">Standard Hotel</option>
            <option value="Luxury Hotel">Luxury Hotel</option>
            <option value="Resort">Resort</option>
          </select>
          <p>{errors.hotel?.message}</p>

          <input
            type="text"
            placeholder="Duration of Trip, for example: 7 days"
            {...register("duration")}
          />
          <p>{errors.duration?.message}</p>

          <button type="submit">
            Book Now
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Booking;