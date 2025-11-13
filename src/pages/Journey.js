import { useState, useEffect, useRef } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { journeyData } from '../data/journeyData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function StorySection({ children, delay = 0 }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    );
}

export default function Journey() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const pathRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength());
        }

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(scrollTop / docHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <>
            {!isMobile && (
                <svg
                    style={{
                        position: 'fixed',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '0',
                        height: '100%',
                        width: '300px',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }}
                    viewBox="0 0 300 10000"
                    preserveAspectRatio="xMidYMin slice"
                >
                    <path
                        ref={pathRef}
                        d="M 150 0 
           C 180 400, 120 600, 150 1000
           C 180 1300, 130 1700, 150 2000
           C 170 2400, 135 2700, 150 3000
           C 165 3400, 140 3800, 150 4000
           C 160 4500, 145 4900, 150 5000
           C 155 5600, 148 6000, 150 6500
           C 152 7200, 149 7800, 150 8000
           C 151 8700, 150 9300, 150 10000"
                        fill="none"
                        stroke="var(--primary-color)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="20 10"
                        strokeDashoffset={(1 - scrollProgress) * pathLength}
                        style={{
                            transition: 'stroke-dasharray 0.1s linear',
                            filter: 'drop-shadow(0 2px 4px rgba(215, 215, 215, 0.2))'
                        }}
                    />
                </svg>

            )}
            {/* ===== MAP SECTION ===== */}
            <div className="container content-container">
                <div className='mt-5' style={{
                    textAlign: 'center', marginBottom: '40px', backgroundColor: 'white',
                    position: 'relative',
                    zIndex: 10
                }}>
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className='mt-5'
                        style={{ fontSize: '3rem', marginBottom: '20px' }}
                    >
                        My Journey
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ fontSize: '1.5rem', marginBottom: '30px' }}
                    >
                        A transformation driven by curiosity and data-driven growth
                    </motion.p>
                </div>

                <div style={{
                    maxWidth: '900px', margin: '0 auto', backgroundColor: 'white',
                    position: 'relative',
                    zIndex: 10
                }}>
                    <ComposableMap
                        projection="geoMercator"
                        projectionConfig={{ scale: 130, center: [30, 20] }}
                    >
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="var(--main-bg-color)"
                                        stroke="var(--main-bg-color)"
                                        strokeWidth={0.5}
                                    />
                                ))
                            }
                        </Geographies>

                        {journeyData.countries.map((country, idx) => (
                            <Marker key={country.id} coordinates={country.coordinates}>
                                <motion.g
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1 + idx * 0.2, duration: 0.5 }}
                                    onClick={() => setSelectedCountry(country)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <circle r={6} fill={country.color} stroke="white" strokeWidth={2} />
                                    <text
                                        textAnchor="middle"
                                        y={18}
                                        style={{ fontSize: '16px' }}
                                    >
                                        {country.flag}
                                    </text>
                                </motion.g>
                            </Marker>
                        ))}
                    </ComposableMap>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    style={{ marginTop: '50px' }}
                >
                    <div className='scroll-text-wrapper text-center'>
                        <p>scroll <FontAwesomeIcon icon={faAnglesDown} /></p>
                    </div>
                </motion.div>
            </div>

            {/* Foundation Years */}
            <section className="container py-5" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <StorySection>
                            <div>
                                <span style={{ fontSize: '2rem' }}>🇹🇭🇨🇭🇬🇧</span>
                                <h2 className="journey-heading mt-3">The Foundation Years</h2>
                                <p className="lead text-muted">2008-2014</p>
                                <p className="fs-6">
                                    It started with a Finance degree in Bangkok, but hospitality called.
                                    I moved to Switzerland to study Hotel Management, then tested my skills
                                    at Gatwick Airport's Copthorne Hotel—serving travelers from 50+ countries daily.
                                </p>
                                <div className="mt-4">
                                    <div className="mb-3">
                                        <strong className="text-info">🇹🇭 Thammasat University</strong>
                                        <p className="text-muted mb-1">Bachelor's in Finance & Real Estate</p>
                                    </div>
                                    <div className="mb-3">
                                        <strong className="text-info">🇨🇭 Swiss Hotel Management School</strong>
                                        <p className="text-muted mb-1">Postgraduate Diploma</p>
                                    </div>
                                    <div>
                                        <strong className="text-info">🇬🇧 Copthorne Hotel</strong>
                                        <p className="text-muted mb-1">F&B Trainee</p>
                                    </div>
                                </div>
                            </div>
                        </StorySection>
                    </div>
                    <div className="col-md-6">
                        <StorySection delay={0.3}>
                            <div className="text-center">
                                <div className="p-4 journey-card-dark rounded shadow-sm m-2">
                                    <h4 className="journey-subheading mb-3">Key Takeaway</h4>
                                    <p className="fs-5 text-white mb-0 p-4">
                                        Building a foundation in finance and hospitality across three countries taught me adaptability — the skill that shaped every step after.
                                    </p>
                                </div>
                            </div>
                        </StorySection>
                    </div>
                </div >
            </section >

            {/* Hospitality Chapter */}
            < section className="container py-5" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }
            }>
                <div className="row align-items-center">
                    <div className="col-md-6 order-md-2">
                        <StorySection>
                            <div>
                                <span style={{ fontSize: '2rem' }}>🇲🇻🇲🇾</span>
                                <h2 className="journey-heading mt-3">The Hospitality Chapter</h2>
                                <p className="lead text-muted">2015-2016</p>
                                <p className="fs-6">
                                    From the pristine beaches of Maldives to Malaysia's resort scene,
                                    I optimized operations and managed finances. At AVANI Sepang,
                                    I explored <strong>Big Data implementation</strong> —
                                    my first taste of using data to solve real problems.
                                </p>
                                <div className="mt-4">
                                    <div className="mb-3">
                                        <strong className="text-info">🇲🇻 Huvafen Fushi Resort, Maldives </strong>
                                        <p className="text-muted">Reduced food costs by 35%</p>
                                    </div>
                                    <div>
                                        <strong className="text-info">🇲🇾 AVANI Sepang, Malaysia </strong>
                                        <p className="text-muted">First Big Data Project (This planted the seed for tech💡)</p>

                                    </div>
                                </div>
                            </div>
                        </StorySection>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <StorySection delay={0.3}>
                            <div className="text-center">
                                <div className="p-4 journey-card rounded shadow-sm m-2">
                                    <h1 className="journey-pop mb-3">35%</h1>
                                    <p className="fs-5 mb-2">Cost reduction through data analysis</p>
                                </div>
                            </div>
                        </StorySection>
                    </div>
                </div>
            </section >

            {/* Academic Growth */}
            < section className="container py-2" style={{
                minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: 'white',
                position: 'relative',
                zIndex: 10
            }}>
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <StorySection>
                            <span style={{ fontSize: '2rem' }}>🇩🇰🇸🇮🇪🇸</span>
                            <h2 className="journey-heading mt-3">Three Countries, One Master's</h2>
                            <p className="lead text-muted">2017-2019</p>
                            <p className="fs-6 mx-auto" style={{ maxWidth: '800px' }}>
                                I pursued a European Master in Tourism Management across Denmark,
                                Slovenia, and Spain. Each semester, a new country. Each country,
                                a new perspective on strategy, sustainability, and global thinking.
                            </p>
                        </StorySection>
                    </div>
                    <div className="col-md-4">
                        <StorySection delay={0.2}>
                            <div className="card shadow-sm h-100 ">
                                <div className="card-body text-center">
                                    <h1 className="display-1">🇩🇰</h1>
                                    <h5>Denmark</h5>
                                    <p className="text-muted">University of Southern Denmark</p>
                                    <p>Strategic tourism management</p>
                                </div>
                            </div>
                        </StorySection>
                    </div>
                    <div className="col-md-4">
                        <StorySection delay={0.4}>
                            <div className="card shadow-sm h-100 ">
                                <div className="card-body text-center">
                                    <h1 className="display-1">🇸🇮</h1>
                                    <h5>Slovenia</h5>
                                    <p className="text-muted">University of Ljubljana</p>
                                    <p>Sustainable tourism practices</p>
                                </div>
                            </div>
                        </StorySection>
                    </div>
                    <div className="col-md-4">
                        <StorySection delay={0.6}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body text-center">
                                    <h1 className="display-1">🇪🇸</h1>
                                    <h5>Spain</h5>
                                    <p className="text-muted">University of Girona</p>
                                    <p>Tourism innovation</p>
                                </div>
                            </div>
                        </StorySection>
                    </div>
                </div>
            </section >

            {/* Back to Thailand */}
            < section className="container py-2" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <StorySection>
                            <div>
                                <span style={{ fontSize: '2rem' }}>🇹🇭</span>
                                <h2 className="journey-heading mt-3">Back to Bangkok</h2>
                                <p className="lead text-muted">2019-2020</p>
                                <p className="fs-6">
                                    After my European Master's, I returned home to work with PATA
                                    (Pacific Asia Travel Association). I recruited 20+ new members and
                                    achieved a 20% increase in membership renewals through data-driven strategies.
                                </p>
                                <div className="mt-4">
                                    <strong className="text-info">📊 PATA - Member Relations Executive</strong>
                                    <p className="text-muted">20% increase in membership renewals</p>
                                </div>
                            </div>
                        </StorySection>
                    </div>
                    <div className="col-md-6">
                        <StorySection delay={0.3}>
                            <div className="text-center">
                                <div className="p-4 journey-card rounded shadow-sm m-2">
                                    <h4 className="journey-subheading-dark mb-3">Full Circle</h4>
                                    <p className="fs-5 mb-2 p-3 mt-2">
                                        "Nine years after leaving for Switzerland, I returned home with
                                        international experience. But life had other plans — Belgium called..."
                                    </p>
                                </div>
                            </div>
                        </StorySection>
                    </div>
                </div>
            </section >

            {/* Moving to Belgium */}
            < section className="container py-2" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <StorySection>
                            <div className="p-4 journey-card-dark rounded shadow-sm">
                                <h3 className="journey-subheading mb-3 m-2">A New Beginning</h3>
                                <p className="fs-5 text-white mb-2 p-3 mt-2">
                                    "In the midst of global uncertainty, I made a bold move:
                                    relocating to Antwerp. While the world paused, I was starting fresh."
                                </p>
                            </div>
                        </StorySection>
                    </div>
                    <div className="col-md-6">
                        <StorySection>
                            <span style={{ fontSize: '2rem' }}>🇧🇪</span>
                            <h2 className="journey-heading mt-3">Moving to Belgium</h2>
                            <p className="lead text-muted">2020-2023</p>
                            <div className="mx-auto" style={{ maxWidth: '700px' }}>
                                <p className="fs-6">
                                    Living in Antwerp, I dedicated myself to learning Dutch (reaching C1)
                                    and teaching myself programming. HTML, CSS, JavaScript—
                                    each line of code brought me closer to a new career.
                                </p>
                                <div className="mt-4">
                                    <div className="mb-3">
                                        <strong className="text-info">📚 Dutch Language - C1 Level</strong>
                                        <p className="text-muted">University of Antwerp & CVO</p>
                                    </div>
                                    <div>
                                        <strong className="text-info">💻 Self-Learning Programming</strong>
                                        <p className="text-muted">HTML, CSS, JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </StorySection>
                    </div>

                </div>

            </section >

            {/* Web Development */}
            < section className="container py-2" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <StorySection>
                            <div>
                                <h2 className="journey-heading mt-3">Breaking Into Tech</h2>
                                <p className="lead text-muted">2024</p>
                                <p className="fs-6">
                                    I joined HackYourFuture's Full-Stack bootcamp (Jan-Oct 2024) and worked as a
                                    freelance web developer. During this time, I won Capgemini's hackathon
                                    with an AI coral reef monitoring solution.
                                </p>
                                <div className="mt-4">
                                    <div className="mb-3">
                                        <strong className="text-info">🎓 HackYourFuture Belgium</strong>
                                        <p className="text-muted">Full-Stack Web Development</p>
                                    </div>
                                    <div>
                                        <strong className="text-info">💼 Freelance Web Developer</strong>
                                        <p className="text-muted">Squarespace, SEO optimization</p>
                                    </div>
                                </div>
                            </div>
                        </StorySection>
                    </div>
                    <div className="col-md-6 ">
                        <StorySection>
                            <div className="p-4 journey-card-dark rounded shadow-sm">
                                <h2 className="journey-subheading mt-3">From Web to Data Pipelines</h2>
                                <p className="lead text-white">May 2025 - Present</p>
                                <p className="fs-6 text-white">
                                    <br />
                                    Now specializing in Data Engineering at BeCode. Building ETL pipelines
                                    with Python, Airflow, and Azure. Working with real data from Orange Belgium.
                                    That 2016 Big Data seed has finally grown into a career.
                                </p>
                            </div>
                        </StorySection>
                    </div>
                </div>
            </section >

            {/* Awards & Recognition */}
            <section className="container py-5" style={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'var(--main-bg-color)',
                position: 'relative',
                zIndex: 10
            }}>
                <div className="row w-100">
                    <div className="col-12 text-center mb-4">
                        <StorySection>
                            <h2 className="journey-heading">Awards & Recognition</h2>
                            <p className="lead text-muted">2 wins out of 3 hackathons</p>
                        </StorySection>
                    </div>

                    <div className="col-12">
                        <StorySection delay={0.2}>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                {/* Win 1 */}
                                <div className="award-card p-4 rounded shadow-sm" style={{ maxWidth: '350px' }}>
                                    <div className="text-center">
                                        <h1 className="display-4 mb-2">🏆</h1>
                                        <h5 className="journey-subheading-dark mb-2">Tech4Positive Futures</h5>
                                        <p className="small text-muted mb-1">Capgemini Belgium • 2024</p>
                                        <p className="small">AI coral reef monitoring</p>
                                    </div>
                                </div>

                                {/* Win 2 */}
                                <div className="award-card p-4 rounded shadow-sm" style={{ maxWidth: '350px' }}>
                                    <div className="text-center">
                                        <h1 className="display-4 mb-2">🏆</h1>
                                        <h5 className="journey-subheading-dark mb-2">Deepfake Detection</h5>
                                        <p className="small text-muted mb-1">Orange Belgium • 2025</p>
                                        <p className="small">AI media authentication system</p>
                                    </div>
                                </div>

                                {/* Placeholder for future wins - comment out or keep for easy adding */}
                                {/* 
                    <div className="award-card p-4 rounded shadow-sm" style={{ maxWidth: '350px' }}>
                        <div className="text-center">
                            <h1 className="display-4 mb-2">🏆</h1>
                            <h5 className="journey-subheading-dark mb-2">Future Win</h5>
                            <p className="small text-muted mb-1">Company • Year</p>
                            <p className="small">Description</p>
                        </div>
                    </div>
                    */}
                            </div>
                        </StorySection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            < section className="container py-2 justify-content-center" style={{
                minHeight: '90vh', display: 'flex', alignItems: 'center', backgroundColor: 'white',
                position: 'relative',
                zIndex: 10
            }
            }>
                <div className="row">
                    <div className="col-12 text-center">
                        <StorySection>
                            <h2 className="journey-heading mb-4">What's Next?</h2>
                            <p className="fs-6 fs-md-5 mb-5 mx-auto px-3"
                                style={{ maxWidth: '700px' }}>
                                Having built a solid tech foundation in Antwerp,
                                I'm now looking for opportunities to apply my unique blend of
                                international experience, data engineering skills, and adaptability
                                to solve real-world problems.
                            </p>
                            <div className="d-flex flex-wrap flex-md-nowrap gap-3 justify-content-center">
                                <a href="/contact" className="btn-branding">
                                    Let's Connect
                                </a>
                                <a href="/data" className="btn-branding-outline">
                                    View Projects
                                </a>
                            </div>
                        </StorySection>
                    </div>
                </div>
            </section >

            {/* Country Detail Modal */}
            {
                selectedCountry && (
                    <>
                        <div className='country-model'>
                            <button
                                onClick={() => setSelectedCountry(null)}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer'
                                }}
                            >
                                ×
                            </button>

                            <h2>{selectedCountry.flag} {selectedCountry.name}</h2>
                            <p><strong>{selectedCountry.city}</strong></p>

                            {selectedCountry.visits.map((visit, idx) => (
                                <div key={idx} style={{ marginTop: '15px', borderLeft: '4px solid ' + selectedCountry.color, paddingLeft: '15px' }}>
                                    <p style={{ color: '#666', marginBottom: '5px' }}>{visit.period}</p>
                                    <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{visit.role}</p>
                                    <p style={{ marginBottom: '5px' }}>{visit.company}</p>
                                    <p style={{ color: selectedCountry.color, marginBottom: '5px' }}>✨ {visit.achievement}</p>
                                    {visit.funFact && <p style={{ fontStyle: 'italic', color: '#666', fontSize: '0.9rem' }}>💡 {visit.funFact}</p>}
                                </div>
                            ))}
                        </div>
                        <div
                            onClick={() => setSelectedCountry(null)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                zIndex: 999
                            }}
                        />
                    </>
                )
            }
        </>
    );
}