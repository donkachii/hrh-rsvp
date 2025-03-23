
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface IFormInput {
  firstName: string
  lastName: string
  email: string
  phone: string
  isAttending: string
  allergies: string
  accommodations: string
  message: string
}

const RSVPForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Replace this alert with your submission logic (e.g., API call)
    alert('Thank you for your RSVP!\n\n' + JSON.stringify(data, null, 2))
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-screen-md overflow-hidden bg-white rounded-md shadow-md">
        <div className="p-4 sm:p-8">
          <h1 className="mb-2 text-2xl font-semibold">RSVP</h1>
          <p className="mb-6 text-gray-600">
            Please RSVP by Friday, April 18, 2025
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block mb-1 font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                {...register('firstName', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.firstName && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block mb-1 font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                {...register('lastName', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.lastName && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Attending Toggle */}
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Attendance:</span>
              <label className="inline-flex items-center gap-1">
                <input
                  type="radio"
                  value="attending"
                  {...register('isAttending', { required: true })}
                  defaultChecked
                />
                <span className="text-gray-700">Attending</span>
              </label>
              <label className="inline-flex items-center gap-1">
                <input
                  type="radio"
                  value="not_attending"
                  {...register('isAttending', { required: true })}
                />
                <span className="text-gray-700">Not Attending</span>
              </label>
              {errors.isAttending && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Survey Questions */}
            <div className="p-4 border border-gray-200 rounded bg-gray-50">
              <h2 className="mb-3 text-lg font-semibold">Survey Questions</h2>

              {/* Allergies */}
              <div className="mb-3">
                <label htmlFor="allergies" className="block mb-1 font-medium text-gray-700">
                  Do you have any food allergies?
                </label>
                <textarea
                  id="allergies"
                  rows={2}
                  {...register('allergies')}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Accommodations */}
              <div>
                <label htmlFor="accommodations" className="block mb-1 font-medium text-gray-700">
                  Accommodations/Logistics needed?
                </label>
                <textarea
                  id="accommodations"
                  rows={2}
                  {...register('accommodations')}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            {/* Optional Message */}
            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                Optional message to the host
              </label>
              <textarea
                id="message"
                rows={3}
                {...register('message')}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </div>
      {/* Link to return to Landing Page */}
      <Link to="/" className="mt-4 text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  )
}

export default RSVPForm