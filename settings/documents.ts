import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Inventory",
    href: "/pendahuluan",
    heading: "Getting started",
    items: [
      {
        title: "Teknologi yang digunakan",
        href: "/teknologi-yang-digunakan",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Analisis dan desain perangkat lunak",
    href: "/structure",
    items: [
      {
        title: "Analisis Kebutuhan",
        href: "/deeper",
        items : [
          {
            title: "Business Requirement",
            href: "/business-requirement",
          },
          {
            title: "Stakeholder Requirement",
            href: "/stakeholder-requirement",
          },
          {
            title: "System Requirement",
            href: "/sistem-requirement",
          },
          {
            title: "Software Requirement",
            href: "/software-requirement",
          },
        ],
      },
      {
        title: "Diagram",
        href: "/Diagram",
        items : [
          {
            title: "Use Case Diagram",
            href: "/Use-Case-Diagram",
          },
          {
            title: "Diagram Class",
            href: "/Diagram-Class",
          },
          {
            title: "Flow Chart",
            href: "/FlowChart",
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Perancangan Desain Antarmuka",
    href: "/perancangan-desain-antarmuka",
    items: [
      {
        title: "Dokumen Desain",
        href: "/dokumen-desain",
        items: [
          {
            title: "Sketsa Awal",
            href: "/sketsa-awal",
          },
          {
            title: "Wireframe",
            href: "/wireframe",
          },
          {
            title: "Userflow",
            href: "/userflow",
          },
          {
            title: "prototipe",
            href: "/prototype",
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Pengembangan Aplikasi",
    href: "/pengembangan-aplikasi",
    items: [
      {
        title: "Metode LDLC",
        href: "/metode-LDLC",
        items: [
          {
            title: "Analisis Kebutuhan",
            href: "/analisis-kebutuhan",
          },
          {
            title: "Pembuatan Diagram UML",
            href: "/pembuatan-diagram-UML",
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Dokumentasi Penggunaan Website",
    href: "/dokumentasi-penggunaan-website",
    items: [
      {
        title: "Panduan Penggunaan Fitur Utama Dan Alur Sistem",
        href: "/panduan-penggunaan-fitur",
      },
    ],
  },
  {
    spacer: true,
  },
];