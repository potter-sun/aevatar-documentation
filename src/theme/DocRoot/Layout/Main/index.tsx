import React, { type ReactNode } from "react";
import clsx from "clsx";
import { useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import type { Props } from "@theme/DocRoot/Layout/Main";

import styles from "./styles.module.css";
import Feedback from "@site/src/components/HomepageFeatures/Feedback";

export default function DocRootLayoutMain({
  hiddenSidebarContainer,
  children,
}: Props): ReactNode {
  const sidebar = useDocsSidebar();
  return (
    <>
      <main
        className={clsx(
          styles.docMainContainer,
          (hiddenSidebarContainer || !sidebar) &&
            styles.docMainContainerEnhanced
        )}>
        <div
          className={clsx(
            "container padding-top--md padding-bottom--lg",
            styles.docItemWrapper,
            hiddenSidebarContainer && styles.docItemWrapperEnhanced
          )}>
          {children}
          <Feedback />
        </div>
      </main>
    </>
  );
}
