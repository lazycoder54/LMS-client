"use client";

import { Suspense, useState, useEffect } from "react";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useSearchParams } from "next/navigation";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import { styles } from "../styles/style";
import CourseCard from "../components/Course/CourseCard";
import Footer from "../components/Footer";

const CoursePage = () => {
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
  const { data: categoriesData } = useGetHeroDataQuery("Categories", {});
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (category === "All") {
      setCourses(data?.courses);
    } else if (category !== "All") {
      setCourses(data?.courses.filter((item: any) => item.categories === category));
    }
  }, [data, category]);

  const categories = categoriesData?.layout.categories;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
          <div className="w-[95%] 800px:w-[85%] m-auto min-h-[70vh]">
            <Heading
              title={"All courses - ELearning"}
              description={"ELearning is a programming community."}
              keywords={"Programming community, expert insights, collaboration, growth"}
            />
            <br />
            <Suspense fallback={<div>Loading Courses...</div>}>
              <SearchableCourses data={data} categories={categories} />
            </Suspense>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

const SearchableCourses = ({ data, categories }: any) => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("title");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!data?.courses) return;

    let filteredCourses = data.courses;

    if (search) {
      filteredCourses = filteredCourses.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setCourses(filteredCourses);
  }, [data, search]);

  return (
    <>
      {courses.length === 0 ? (
        <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
          {search ? "No Courses found!" : "No courses found in this category. Please try another one!"}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
          {courses.map((item: any, index: number) => (
            <CourseCard item={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default CoursePage;
