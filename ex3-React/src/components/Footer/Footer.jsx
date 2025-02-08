import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-4 pb-4 pt-10 lg:pt-20">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-12">
          <div className="w-[290px] space-y-2">
            <Link to="/" className="font-bold text-[32px] text-primary ">
              ShenCarCar
            </Link>
            <p className="font-medium text-base text-dark/60">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="w-[576px] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 lg:gap-16">
            <div className="space-y-4 sm:space-y-7">
              <h3 className="font-semibold text-xl text-dark">About</h3>
              <ul className="grid gap-4 sm:gap-6">
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Featured
                  </Link>
                </li>
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Bussiness Relation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 sm:space-y-7">
              <h3 className="font-semibold text-xl text-dark">Community</h3>
              <ul className="grid gap-4 sm:gap-6">
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Invite a friend
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 sm:space-y-7">
              <h3 className="font-semibold text-xl text-dark">Socials</h3>
              <ul className="grid gap-4 sm:gap-6">
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="#" className="font-medium text-base text-dark/60">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-dark/15 flex flex-col-reverse gap-4 sm:flex-row justify-center items-center sm:justify-between">
          <p className="font-semibold text-base text-dark">
            ©2025 ShenCarCar. All rights reserved
          </p>
          <ul className="flex gap-6 items-center">
            <li>
              <Link to="#" className="text-dark font-semibold text-base">
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="text-dark font-semibold text-base">
                Terms & Condition
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
