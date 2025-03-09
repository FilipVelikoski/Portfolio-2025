"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./grid.module.scss";
import {
  WidthProvider,
  ResponsiveGridLayout as Responsive,
} from "react-grid-layout-next";
import { heights, layouts } from "@/data";
import ThemeToggle from "../theme-toggle";
import BlurFade from "../magic-ui/blur-fade";
import {
  TextMarqueeCard,
  MyTechCard,
  AboutCard,
  MapCard,
  ResumeCard,
  IconCard,
} from "@/components/cards";
import EducationCard from "../cards/education-card";
import StreetArtistProject from "../cards/project-cards/StreetArtistProject";
import PortfolioProject from "../cards/project-cards/PortfolioProject";
import DNATrailsProject from "../cards/project-cards/DNATrailsProject";
import MainCard from "../cards/main-card";
import dynamic from "next/dynamic";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Grid = () => {
  const [height, setHeight] = useState(280);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);

  return (
    <div className={styles.container}>
      <MainCard />

      <ResponsiveGridLayout
        useCSSTransforms
        className={styles.layout}
        layouts={layouts.all}
        breakpoints={{
          lg: 1199,
          md: 799,
          sm: 374,
        }}
        cols={{
          lg: 12,
          md: 10,
          sm: 4,
        }}
        isDraggable={false}
        rowHeight={height}
        onBreakpointChange={(breakpoint: any) => {
          setHeight(heights[breakpoint]);
        }}
        margin={[16, 16]}
      >
        <div
          key="bio"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
            height: "100%",
          }}
        >
          <BlurFade delay={0.01}>
            <AboutCard />
          </BlurFade>
        </div>
        <div
          key="theme-toggle"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <div className="flex flex-col-reverse sm:flex-col gap-3 h-full">
            <BlurFade delay={0.1}>
              <ResumeCard />
            </BlurFade>
            <BlurFade delay={0.12}>
              <ThemeToggle />
            </BlurFade>
          </div>
        </div>
        <div
          key="map"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.08}>
            <MapCard />
          </BlurFade>
        </div>
        <div
          key="text-marquee"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.04}>
            <TextMarqueeCard />
          </BlurFade>
        </div>
        <div
          key="linkedin"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.24}>
            <IconCard
              title="Linkedin"
              link="https://www.linkedin.com/in/filip-velikoski-589033231/"
            />
          </BlurFade>
        </div>
        <div
          key="github"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.26}>
            <IconCard title="Github" link="https://github.com/FilipVelikoski" />
          </BlurFade>
        </div>

        <div
          key="email"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.3}>
            <IconCard title="Email" link="filipvelikoski9@gmail.com" />
          </BlurFade>
        </div>
        <div
          key="my-stack"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.35}>
            <MyTechCard />
          </BlurFade>
        </div>
        <div
          key="jobs"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.4}>
            <EducationCard />
          </BlurFade>
        </div>
        <div
          key="station-ui"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.5}>
            <StreetArtistProject />
          </BlurFade>
        </div>
        <div
          key="station-landing"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.55}>
            <PortfolioProject />
          </BlurFade>
        </div>

        <div
          key="alliance-dao"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.65}>
            <DNATrailsProject />
          </BlurFade>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};
export default dynamic(() => Promise.resolve(Grid), { ssr: false });
