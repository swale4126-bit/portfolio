import { useState, useEffect } from "react";
import { 
    FaGithub, FaReact, FaNodeJs, FaExternalLinkAlt, 
    FaChevronLeft, FaChevronRight, FaTimes, FaCheckCircle, 
    FaLightbulb, FaCogs, FaLayerGroup, FaInfoCircle
} from "react-icons/fa";
import { 
    SiTailwindcss, SiExpress, SiPostgresql, SiBootstrap, 
    SiDotnet 
} from "react-icons/si";
import { TbBrandCSharp, TbApi } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

import bmsDashboard from "../assets/projects/bms-dashboard.png";
import bmsProducts from "../assets/projects/bms-products.png";
import bmsInventory from "../assets/projects/bms-inventory.png";
import bmsSales from "../assets/projects/bms-sales.png";
import bmsCustomers from "../assets/projects/bms-customers.png";
import visitHawassa from "../assets/projects/hawassa.png";
import clinicImg from "../assets/projects/clinic.png";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setSelectedProject(null);
        };
        if (selectedProject) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProject]);

    const featuredProject = {
        id: "bms",
        name: "Business Management System",
        tagline: "Featured Full-Stack Project",
        category: "Full-Stack Web Application",
        overview: "A comprehensive, full-stack enterprise management platform built to centralize inventory, sales, customer relationships, supplier purchasing, and staff roles into a unified, responsive system.",
        problem: "Small and growing commercial businesses frequently depend on disconnected spreadsheets and disjointed tools to track inventory, sales transactions, suppliers, and staff. This operational fragmentation causes manual invoicing errors, stock discrepancies, missed reorders, and a lack of real-time sales visibility.",
        solution: "Engineered a centralized, multi-role web platform that organizes essential operations into one cohesive workflow: product cataloging, automated stock deduction on sales, instant PDF/Excel invoicing, customer credit tracking, supplier purchasing, and role-based staff permissions.",
        whyTech: [
            { 
                tech: "React.js & Tailwind CSS", 
                reason: "Provides a responsive component-based UI with client-side state handling via TanStack Query and instant search filtering across hundreds of catalog items." 
            },
            { 
                tech: "Node.js & Express.js", 
                reason: "Asynchronous, non-blocking REST API architecture efficiently processing complex CRUD transactions and analytics queries with minimal overhead." 
            },
            { 
                tech: "PostgreSQL & Prisma ORM", 
                reason: "Guarantees relational data integrity across products, sales orders, inventory movements, and user records with schema migrations and type safety." 
            },
            { 
                tech: "REST APIs & JWT Authentication", 
                reason: "Secures sensitive business transactions with HTTP-only cookie-based JWT authorization, password hashing, and role-based middleware access control." 
            }
        ],
        keyFeatures: [
            "Product Catalog & Category Management with image uploads via Multer",
            "Real-Time Inventory Tracking with automated stock deduction and restock alerts",
            "Point-of-Sale & Invoicing with itemized order calculation and instant PDF/Excel exports",
            "Customer & Supplier CRM tracking purchase histories, payments, and balances",
            "Employee Role Management with granular authorization restricting sensitive business data",
            "Visual Dashboard Analytics (Recharts) for real-time sales and revenue reporting"
        ],
        techBadges: [
            { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
            { name: "REST APIs", icon: <TbApi className="text-blue-600" /> }
        ],
        architecture: "Client-server architecture featuring a React SPA frontend communicating via Axios and TanStack Query with an Express.js REST API. Backend services utilize Prisma ORM for type-safe queries to a PostgreSQL database, secured with JWT and Helmet middleware.",
        outcomes: "Replaces fragmented manual paper logs and loose spreadsheets with a reliable, role-secure system giving managers accurate live visibility over stock levels, daily revenues, and customer transaction records.",
        screenshots: [
            { src: bmsDashboard, caption: "Main Analytics & Operations Dashboard" },
            { src: bmsProducts, caption: "Product Catalog & Pricing Management" },
            { src: bmsInventory, caption: "Real-Time Inventory & Stock Alerts" },
            { src: bmsSales, caption: "Point of Sale & Invoicing Workflow" },
            { src: bmsCustomers, caption: "Customer & Supplier CRM Module" }
        ],
        github: "https://github.com/swale4126-bit/Business-Management-System.git",
        liveUrl: "https://business-management-system-sf2h.vercel.app/"
    };

    const regularProjects = [
        {
            id: "visit-hawassa",
            name: "Visit Hawassa",
            category: "Frontend Web Application",
            overview: "A responsive, interactive tourism and destination discovery web application that helps travelers and locals explore Hawassa's attractions, resorts, restaurants, and cultural experiences.",
            problem: "Visitors and travelers arriving in Hawassa often struggle to discover authentic attractions, lakeside resorts, cultural dining spots, and practical travel logistics due to fragmented, outdated, or unstructured online information.",
            solution: "Developed an intuitive, mobile-first web guide that curates Hawassa's premier destinations into structured categories, paired with interactive geographic map markers, search filtering, and comprehensive place detail profiles.",
            whyTech: [
                { 
                    tech: "React.js Component Architecture", 
                    reason: "Constructed reusable UI components (PlaceCard, FilterBar, PlaceMap) for consistent presentation and effortless content scaling." 
                },
                { 
                    tech: "Tailwind CSS", 
                    reason: "Implemented a responsive, utility-driven mobile layout ensuring quick load times and high visual consistency across devices." 
                },
                { 
                    tech: "Leaflet & React-Leaflet", 
                    reason: "Provided interactive geospatial mapping to visually plot destination coordinates and landmarks across Hawassa." 
                },
                { 
                    tech: "React Router DOM", 
                    reason: "Facilitates client-side navigation between curated categories and dynamic place details without full page reloads." 
                }
            ],
            keyFeatures: [
                "Categorized Directory covering Lake Hawassa attractions, resorts, dining, and culture",
                "Dynamic Category & Keyword Filter Bar for instantaneous destination discovery",
                "Interactive Leaflet Map with customized destination markers and popup details",
                "Dedicated Place Detail Views featuring photo galleries, contact info, and directions",
                "Traveler Guidelines highlighting transportation tips, weather, and cultural etiquette"
            ],
            techBadges: [
                { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
            ],
            whyTechSummary: "React.js enables reusable place cards, live filtering, and interactive Leaflet maps, while Tailwind CSS delivers fast, mobile-first styling across devices.",
            architecture: "Modular React SPA consuming structured data models for attractions, resorts, and dining. Employs declarative React Router navigation and React-Leaflet for client-side geospatial rendering.",
            outcomes: "Provides tourists with a fast, mobile-ready digital guide to easily discover top destinations, view locations on an interactive map, and access reliable visit details in Hawassa.",
            image: visitHawassa,
            github: "https://github.com/swale4126-bit/Visit-Hawassa.git",
            liveUrl: "https://visit-hawassa.vercel.app/"
        },
        {
            id: "clinic-ms",
            name: "Hawassa University Clinic Management System",
            category: "Full-Stack Enterprise Web Application",
            overview: "A role-based clinical workflow and healthcare record system engineered for university health centers to manage patient triage, electronic medical records, laboratory testing, and pharmacy dispensing.",
            problem: "Campus healthcare facilities handling hundreds of daily student and staff visits suffer from slow paper-based intake, lost patient medical cards, uncoordinated laboratory requests, and untracked pharmacy dispensing.",
            solution: "Designed and built an enterprise web-based clinic management system that digitizes the entire campus healthcare workflow—from registration and triage queueing to doctor consultations, electronic medical records (EMR), lab testing, and prescription fulfillment.",
            whyTech: [
                { 
                    tech: "C# & .NET", 
                    reason: "Provides robust type safety, high execution performance, and rich standard libraries essential for healthcare data processing." 
                },
                { 
                    tech: "ASP.NET Core MVC", 
                    reason: "Enforces clean separation of concerns (Models, Views, Controllers, Services) across diverse clinical service points." 
                },
                { 
                    tech: "Entity Framework Core & SQL Server", 
                    reason: "Delivers transactional data integrity across patient records, lab test requests, and medical prescriptions." 
                },
                { 
                    tech: "ASP.NET Core Identity (RBAC)", 
                    reason: "Enforces role-based security boundaries ensuring Doctors, Nurses, Lab Technicians, Pharmacists, and Admins access only authorized data." 
                }
            ],
            keyFeatures: [
                "Patient Intake & Triage Queue with vital signs logging and student dorm block records",
                "Electronic Medical Records (EMR) maintaining consultation histories and clinical diagnoses",
                "Laboratory Workflow: Physician test orders, technician queue, and verified result logging",
                "Digital Prescription & Pharmacy Management with dispensing status and stock logs",
                "Role-Segregated Workspaces specifically tailored for Doctors, Nurses, Lab Techs, and Pharmacists"
            ],
            techBadges: [
                { name: "C#", icon: <TbBrandCSharp className="text-[#239120]" /> },
                { name: "ASP.NET Framework", icon: <SiDotnet className="text-[#512BD4]" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> }
            ],
            whyTechSummary: "C# and ASP.NET MVC provide type-safe clinical workflows, Entity Framework relational integrity, and role-based security for medical staff, paired with clean Bootstrap layouts.",
            architecture: "Multi-tier ASP.NET Core MVC architecture with Entity Framework Core ORM interfacing with Microsoft SQL Server, secured via ASP.NET Core Identity for authenticated, role-authorized medical workflows.",
            outcomes: "Eliminates disorganized paper records by digitizing campus clinic operations into a secure, auditable workflow connecting reception, triage, examination rooms, laboratory, and pharmacy.",
            image: clinicImg,
            github: "https://github.com/SAMI477716/HUIOTClinicMS.git",
            liveUrl: null // No live demo URL provided
        }
    ];

    // Carousel component for the featured project
    const ImageCarousel = ({ screenshots }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const nextSlide = () => {
            setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
        };

        const prevSlide = () => {
            setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
        };

        return (
            <div className="flex flex-col h-full">
                <div className="relative w-full h-64 sm:h-80 md:h-[340px] bg-slate-900 overflow-hidden rounded-2xl group flex items-center justify-center">
                    <img
                        src={screenshots[currentIndex].src}
                        alt={screenshots[currentIndex].caption}
                        className="w-full h-full object-contain object-center transition-all duration-300"
                    />

                    {/* Left/Right Buttons */}
                    <button 
                        onClick={prevSlide}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <FaChevronLeft className="text-sm" />
                    </button>
                    <button 
                        onClick={nextSlide}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <FaChevronRight className="text-sm" />
                    </button>

                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white text-xs text-center font-medium">
                        {screenshots[currentIndex].caption} ({currentIndex + 1}/{screenshots.length})
                    </div>
                </div>

                {/* Thumbnails Row */}
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-thin">
                    {screenshots.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                                idx === currentIndex ? "border-blue-600 scale-105 shadow-xs" : "border-gray-200 opacity-60 hover:opacity-100"
                            }`}
                        >
                            <img src={item.src} alt={item.caption} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id="projects" className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
                        Featured Applications
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-3"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base">
                        Explore my full-stack and web development work, including problem analysis, architectural choices, and technical implementations.
                    </p>
                </motion.div>

                {/* ========================================================
                    1. PROMINENT FEATURED PROJECT: Business Management System
                   ======================================================== */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 bg-gradient-to-b from-white to-gray-50/60 rounded-3xl border border-blue-200/80 shadow-[0_10px_35px_rgb(37,99,235,0.08)] overflow-hidden hover:shadow-[0_12px_40px_rgb(37,99,235,0.14)] transition-all duration-300"
                >
                    {/* Top Prominence Banner */}
                    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white px-6 py-2.5 flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            Featured Project
                        </div>
                        <span className="text-xs text-blue-100 font-medium">
                            React.js • Node.js • Express.js • PostgreSQL
                        </span>
                    </div>

                    <div className="p-6 sm:p-8 lg:p-10">
                        <div className="grid lg:grid-cols-12 gap-8 items-start">
                            
                            {/* Left: Screenshots Carousel */}
                            <div className="lg:col-span-5">
                                <ImageCarousel screenshots={featuredProject.screenshots} />
                            </div>

                            {/* Right: Project Highlights & Core Breakdown */}
                            <div className="lg:col-span-7 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                                            {featuredProject.name}
                                        </h3>
                                    </div>
                                    <p className="text-sm font-semibold text-blue-600 mb-4">
                                        {featuredProject.category}
                                    </p>

                                    <p className="text-gray-600 text-base leading-relaxed mb-5">
                                        {featuredProject.overview}
                                    </p>

                                    {/* Problem & Solution Quick Highlights */}
                                    <div className="grid sm:grid-cols-2 gap-3 mb-5">
                                        <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-2xs">
                                            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-1 uppercase tracking-wider">
                                                <FaLightbulb /> The Problem
                                            </div>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                Disconnected spreadsheets causing manual invoicing errors, stock discrepancies, and poor sales visibility.
                                            </p>
                                        </div>
                                        <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-2xs">
                                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1 uppercase tracking-wider">
                                                <FaCheckCircle /> The Solution
                                            </div>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                A unified web system connecting catalog, live inventory, POS, customer credit, and role permissions.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Why I Chose This Technology - Compact Box */}
                                    <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-5">
                                        <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                                            <FaCogs className="text-blue-600" />
                                            Why I Chose This Technology
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-700">
                                            <div>
                                                <strong className="text-gray-900">React + Tailwind:</strong> Fast component UI with real-time catalog filtering.
                                            </div>
                                            <div>
                                                <strong className="text-gray-900">Node + Express:</strong> Asynchronous REST APIs handling multi-entity operations.
                                            </div>
                                            <div>
                                                <strong className="text-gray-900">PostgreSQL + Prisma:</strong> ACID relational integrity across orders & inventory.
                                            </div>
                                            <div>
                                                <strong className="text-gray-900">REST APIs + JWT:</strong> Secure authentication with role-based authorization.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {featuredProject.techBadges.map((t, i) => (
                                            <span 
                                                key={i} 
                                                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-800 px-3 py-1 rounded-lg text-xs font-medium shadow-2xs"
                                            >
                                                {t.icon}
                                                {t.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-200/80">
                                    <a
                                        href={featuredProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition font-medium text-sm shadow-sm hover:shadow-md"
                                    >
                                        <FaExternalLinkAlt className="text-xs" />
                                        Live Demo
                                    </a>

                                    <a
                                        href={featuredProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition font-medium text-sm shadow-sm hover:shadow-md"
                                    >
                                        <FaGithub className="text-base" />
                                        View Code
                                    </a>

                                    <button
                                        onClick={() => setSelectedProject(featuredProject)}
                                        className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 border border-blue-300 px-5 py-2.5 rounded-xl hover:bg-blue-50 transition font-medium text-sm shadow-2xs ml-auto"
                                    >
                                        <FaInfoCircle className="text-sm" />
                                        View Project Details
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* ========================================================
                    2 & 3. REGULAR PROJECTS: Visit Hawassa & Clinic MS
                   ======================================================== */}
                <div className="grid md:grid-cols-2 gap-8">
                    {regularProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                        >
                            {/* Project Image */}
                            <div className="w-full h-52 sm:h-56 bg-slate-900 overflow-hidden relative group">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                                />
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-xs">
                                    {project.category}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                        {project.name}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {project.overview}
                                    </p>

                                    {/* Problem & Solution Mini Callouts */}
                                    <div className="space-y-2 mb-4 text-xs">
                                        <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                                            <span className="font-bold text-gray-900">Problem: </span>
                                            <span className="text-gray-600">{project.problem}</span>
                                        </div>
                                        <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                                            <span className="font-bold text-gray-900">Solution: </span>
                                            <span className="text-gray-600">{project.solution}</span>
                                        </div>
                                    </div>

                                    {/* Why I Chose This Technology */}
                                    <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100 mb-4 text-xs">
                                        <div className="flex items-center gap-1.5 font-bold text-blue-900 uppercase tracking-wider mb-1">
                                            <FaCogs className="text-blue-600" />
                                            Why I Chose This Technology
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            {project.whyTechSummary}
                                        </p>
                                    </div>

                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techBadges.map((t, idx) => (
                                            <span 
                                                key={idx}
                                                className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-700 px-2.5 py-1 rounded-lg text-xs font-medium"
                                            >
                                                {t.icon}
                                                {t.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-100 mt-auto">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition font-medium text-xs shadow-xs"
                                        >
                                            <FaExternalLinkAlt className="text-[11px]" />
                                            Live Demo
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-1.5 bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition font-medium text-xs shadow-xs"
                                        >
                                            <FaGithub className="text-sm" />
                                            View Code
                                        </a>
                                    )}

                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="inline-flex items-center justify-center gap-1.5 bg-white text-blue-700 border border-blue-200 px-4 py-2 rounded-xl hover:bg-blue-50 transition font-medium text-xs ml-auto"
                                    >
                                        <FaInfoCircle className="text-xs text-blue-600" />
                                        View Project Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* ========================================================
                3. INTERACTIVE PROJECT DETAILS MODAL
               ======================================================== */}
            <AnimatePresence>
                {selectedProject && (
                    <div 
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs"
                    >
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.25 }}
                            className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-start justify-between gap-4 shrink-0">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
                                        {selectedProject.category}
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                                        {selectedProject.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Technical Deep Dive & Architecture Breakdown
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    aria-label="Close modal"
                                    className="p-2 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition"
                                >
                                    <FaTimes className="text-lg" />
                                </button>
                            </div>

                            {/* Modal Content Scroll Area */}
                            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
                                
                                {/* 1. Overview */}
                                <div>
                                    <h4 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <FaInfoCircle className="text-blue-600" />
                                        Project Overview
                                    </h4>
                                    <p className="text-gray-600">
                                        {selectedProject.overview}
                                    </p>
                                </div>

                                {/* 2. Problem & Solution Grid */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-200/80">
                                        <h5 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <FaLightbulb className="text-amber-600" />
                                            Problem Being Addressed
                                        </h5>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {selectedProject.problem}
                                        </p>
                                    </div>
                                    <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200/80">
                                        <h5 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <FaCheckCircle className="text-emerald-600" />
                                            Solution Developed
                                        </h5>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {selectedProject.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* 3. Why I Chose This Technology */}
                                <div>
                                    <h4 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <FaCogs className="text-blue-600" />
                                        Why I Chose This Technology
                                    </h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {selectedProject.whyTech.map((item, idx) => (
                                            <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                                <strong className="block text-gray-900 font-semibold mb-1 text-sm">
                                                    {item.tech}
                                                </strong>
                                                <p className="text-gray-600 text-xs leading-relaxed">
                                                    {item.reason}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 4. System Architecture */}
                                <div>
                                    <h4 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <FaLayerGroup className="text-blue-600" />
                                        System Architecture & Data Flow
                                    </h4>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-gray-700 text-sm">
                                        {selectedProject.architecture}
                                    </div>
                                </div>

                                {/* 5. Key Verified Features */}
                                <div>
                                    <h4 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <FaCheckCircle className="text-emerald-600" />
                                        Key Implemented Features
                                    </h4>
                                    <ul className="grid sm:grid-cols-2 gap-2.5">
                                        {selectedProject.keyFeatures.map((feat, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 6. Outcomes & Value */}
                                <div>
                                    <h4 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2">
                                        Outcomes & Practical Value
                                    </h4>
                                    <p className="text-gray-600 text-sm bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                        {selectedProject.outcomes}
                                    </p>
                                </div>

                            </div>

                            {/* Modal Footer with Actions */}
                            <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.liveUrl && (
                                        <a
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 font-medium text-sm shadow-xs"
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            Open Live Demo
                                        </a>
                                    )}

                                    {selectedProject.github && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 font-medium text-sm shadow-xs"
                                        >
                                            <FaGithub className="text-base" />
                                            View Source Code
                                        </a>
                                    )}
                                </div>

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-xl hover:bg-gray-100 font-medium text-sm"
                                >
                                    Close
                                </button>
                            </div>

                        </motion.div>

                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Projects;
