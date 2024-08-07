import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full rounded-xl border-4 border-black p-20">
        <h1 className="text-6xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-600"> CrossChat </span>
        </h1>

        <form onSubmit={handleSubmit} className="p-4">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">
                Nome completo
              </span>
            </label>
            <input
              type="text"
              placeholder="Nome e Cognome"
              className="w-full input input-bordered  h-10 bg-stone-300 border-2 border-black text-black"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div className="pt-3">
            <label className="label p-2 ">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10 bg-stone-300 border-2 border-black text-black"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div className="pt-3">
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10 bg-stone-300 border-2 border-black text-black"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div className="pt-3">
            <label className="label">
              <span className="text-base label-text text-white">
                Conferma la Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Conferma Password"
              className="w-full input input-bordered h-10 bg-stone-300 border-2 border-black text-black"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={'/login'}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
            href="#"
          >
            Hai già un account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700 bg-blue-600 hover:bg-blue-800 text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;