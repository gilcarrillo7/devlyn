import * as React from "react";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { DotLoader } from "react-spinners";
import Page from "../components/layout/Page";
import Layout from "../components/layout/Layout";
import Button from "../components/shared/Button";
import {
  selectSending,
  selectSent,
  sendContact,
} from "../features/api/contactSlice";
import { useAppDispatch } from "../hooks";
import Social from "../components/layout/Social";
import { useInView } from "react-intersection-observer";
import { HeadFC } from "gatsby";
import { SEO } from "../components/layout/SEO";

const Textura = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <svg
      ref={ref}
      width="117"
      height="117"
      viewBox="0 0 117 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`hidden sm:block transition-all delay-500 duration-700 ${
        inView ? "opacity-100 absolute bottom-[-59px]" : "opacity-0 bottom-0"
      }`}
    >
      <mask
        id="mask0_2152_1835"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="2"
        width="115"
        height="115"
      >
        <mask
          id="mask1_2152_1835"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="117"
          height="117"
        >
          <path d="M0 0.82135H116.382V117H0V0.82135Z" fill="white" />
        </mask>
        <g mask="url(#mask1_2152_1835)">
          <path
            d="M31.7449 59.7415C31.7449 45.3348 43.4239 33.6558 57.8307 33.6558C72.2374 33.6558 83.9164 45.3348 83.9164 59.7415C83.9164 74.1482 72.2374 85.8272 57.8307 85.8272C43.4239 85.8272 31.7449 74.1482 31.7449 59.7415ZM114.525 59.7415C114.525 28.1141 88.8858 2.48303 57.2585 2.48303C25.6389 2.48303 0 28.1141 0 59.7415C0 91.3689 25.6389 117 57.2585 117C88.8858 117 114.525 91.3689 114.525 59.7415Z"
            fill="#FA8334"
          />
        </g>
      </mask>
      <g mask="url(#mask0_2152_1835)">
        <rect
          x="-7.33502"
          y="59.0126"
          width="130.563"
          height="61.6142"
          fill="#FFE882"
        />
      </g>
    </svg>
  );
};

const FooterContacto = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-4 sm:mt-12 pb-12">
      <div className="sm:w-1/2 flex flex-col justify-center items-center gap-4">
        <div className="flex gap-8">
          <p className="font-bold text-complementary text-xl sm:text-3xl">
            Whatsapp
          </p>
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.191381 22.2959C0.191381 26.2255 1.21846 30.0659 3.17054 33.447L0 45L11.8273 41.8996C15.0872 43.6795 18.7553 44.6109 22.4872 44.6172H22.5C34.793 44.6172 44.8022 34.6144 44.8086 22.315C44.8086 16.3567 42.4929 10.7492 38.2825 6.53885C34.0722 2.32209 28.4711 3.04966e-06 22.5 3.04966e-06C10.2006 -0.00637631 0.191381 9.99646 0.191381 22.2959ZM7.23419 32.8601L6.79402 32.1584C4.93762 29.2047 3.9552 25.7981 3.96158 22.2959C3.96796 12.0761 12.2803 3.76382 22.5128 3.76382C27.4631 3.76382 32.1201 5.69677 35.6223 9.19904C39.1246 12.7013 41.0512 17.3582 41.0512 22.315C41.0448 32.5347 32.7261 40.8534 22.5064 40.8534H22.5C19.17 40.8534 15.9101 39.9603 13.0649 38.2698L12.3887 37.8679L5.37142 39.7051L7.23419 32.8601Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.9244 12.9694C16.5098 12.0444 16.0696 12.0252 15.6677 12.0061C15.3424 11.9933 14.9724 11.9933 14.6024 11.9933C14.2324 11.9933 13.6263 12.1337 13.116 12.6887C12.6056 13.2437 11.1639 14.5961 11.1639 17.3393C11.1639 20.0824 13.1606 22.7298 13.4413 23.1062C13.722 23.4762 17.2944 29.2878 22.9657 31.5206C27.6737 33.377 28.6306 33.007 29.6576 32.9176C30.6783 32.822 32.9558 31.5716 33.4215 30.2702C33.8872 28.9688 33.8872 27.8524 33.7468 27.6228C33.6065 27.3931 33.2365 27.2528 32.6815 26.9721C32.1265 26.6914 29.3833 25.3453 28.873 25.1603C28.3626 24.9753 27.9926 24.8797 27.6162 25.441C27.2462 25.996 26.1745 27.2528 25.8492 27.6228C25.5238 27.9928 25.1985 28.0438 24.6435 27.7631C24.0885 27.4824 22.2895 26.8955 20.1588 24.9945C18.5001 23.5145 17.3838 21.69 17.0584 21.135C16.7331 20.58 17.0265 20.2738 17.3008 19.9994C17.5496 19.7506 17.8558 19.3487 18.1365 19.0234C18.4172 18.6981 18.5065 18.4684 18.6915 18.092C18.8765 17.722 18.7872 17.3967 18.6469 17.116C18.5001 16.8289 17.4157 14.073 16.9244 12.9694Z"
              fill="white"
            />
          </svg>
        </div>
        <Social />
      </div>
      <div className="sm:w-1/2 mt-8 sm:mt-0">
        <div className="font-light text-center sm:text-left text-lg sm:text-xl">
          <p className="font-bold text-complementary text-xl sm:text-3xl">
            Dirección
          </p>
          <p className="text-white my-4">
            Blvd. Miguel de Cervantes Saavedra 31, Col. Granada, 11520 Ciudad de
            México.
          </p>
          <p className="text-white">
            Teléfono: <span className="font-bold">01 55 5262 4100</span>
          </p>
          <p className="text-complementary">
            <a
              className="underline"
              href="mailto:contactofundacion@devlyn.com.mx"
            >
              contactofundacion@devlyn.com.mx
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const Contacto = () => {
  const dispatch = useAppDispatch();
  const sending = useSelector(selectSending);
  const sent = useSelector(selectSent);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const [form, setForm] = useState({
    name: "",
    mail: "",
    msg: "",
  });

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    dispatch(sendContact(form));
  };
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <Layout headerPrimary footer={false}>
      <Page className="bg-contact-gradient text-primary">
        <div ref={ref} className="lg:w-2/3 mx-auto pt-28">
          <p
            className={`text-xl sm:text-3xl lg:text-5xl font-light mb-8 sm:mb-16 transition-all delay-300 duration-500 ${
              inView ? "opacity-100" : "opacity-0 -translate-x-12"
            }`}
          >
            Contáctanos y únete al poder de ver para transformar el mundo.
          </p>
          <form
            className="relative border-b border-complementary pb-4 sm:pb-16"
            onSubmit={handleForm}
          >
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-16 pb-4 md:pb-8">
              <div className="w-full md:w-1/2">
                <input
                  className="text-primary border-b border-primary w-full py-4 outline-none placeholder:text-primary bg-transparent"
                  placeholder="Nombre"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2">
                <input
                  className="text-primary border-b border-primary w-full py-4 outline-none placeholder:text-primary bg-transparent"
                  placeholder="Email"
                  name="mail"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-16 items-center pb-8">
              <div className="w-full md:w-1/2">
                <input
                  className="text-primary border-b border-primary w-full py-4 outline-none placeholder:text-primary bg-transparent"
                  placeholder="Mensaje"
                  name="msg"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 pt-4 md:pt-0">
                {sending ? (
                  <DotLoader color="#FA8334" size={30} />
                ) : (
                  <>
                    {sent ? (
                      <p className="text-primary font-lg">Mensaje enviado</p>
                    ) : (
                      <Button
                        variant="complementary2"
                        className="md:float-left"
                        type="submit"
                      >
                        Enviar
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
            <Textura />
          </form>
          <FooterContacto />
        </div>
      </Page>
    </Layout>
  );
};

export default Contacto;

export const Head: HeadFC = () => <SEO title="Contacto" />;
