import Image from "next/image";
import React from "react";
import Logo from "../../assets/images/logo/digi.svg";
import UpBtn from "./UpBtn";

function Footer() {
  return (
    <footer className="border-y-[1px] border-gray-300 mt-auto">
      <div className="p-6 max-w-[1676px] mx-auto flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Image src={Logo} alt="logo" />
            <small className="mt-3">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</small>
            <small>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</small>
          </div>
          <UpBtn />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="grid gap-2">
            <span className="footer-title">با دیجی‌کالا</span>
            <a className="link link-hover">اتاق خبر دیجی کالا</a>
            <a className="link link-hover">فروش در دیجی‌کالا</a>
            <a className="link link-hover">فرصت‌های شغلی</a>
            <a className="link link-hover">تماس با دیجی‌کالا</a>
          </div>

          <div className="grid gap-2">
            <span className="footer-title">خدمات مشتریان</span>
            <a className="link link-hover">پاسخ به پرسش‌های متداول</a>
            <a className="link link-hover">رویه‌های بازگرداندن کالا</a>
            <a className="link link-hover">شرایط استفاده</a>
            <a className="link link-hover">گزارش باگ</a>
          </div>

          <div className="grid gap-2">
            <span className="footer-title">راهنمای خرید از دیجی‌کالا</span>
            <a className="link link-hover">نحوه ثبت سفارش</a>
            <a className="link link-hover">شیوه های پرداخت</a>
            <a className="link link-hover">رویه ی ارسال سفارش</a>
          </div>
        </div>
      </div>
      <div className="py-5 border-t-[1px] border-gray-300">
        <p className="text-xl mx-auto w-fit">
          توسعه داده شده با ❤️ توسط{" "}
          <a
            className="link link-hover"
            href="https://github.com/alishirani1384"
            target="_blank">
            Ali Shirani
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
