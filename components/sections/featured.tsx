import { config } from "@/config";
import styled from "@emotion/styled";
import useCheckSSR from "hooks/useCheckSSR";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import useSWR from "swr";
import Icon from "../icons/icon";

const StyledProject = styled.li`
	&:not(:last-of-type) {
		margin-bottom: 100px;
		@media (max-width: 768px) {
			margin-bottom: 70px;
		}
		@media (max-width: 480px) {
			margin-bottom: 30px;
		}
	}
	&:nth-of-type(odd) {
		.project-content {
			grid-column: 7 / -1;
			text-align: right;
			@media (max-width: 1080px) {
				grid-column: 5 / -1;
			}
			@media (max-width: 768px) {
				grid-column: 1 / -1;
				padding: 40px 40px 30px;
				text-align: left;
			}
			@media (max-width: 480px) {
				padding: 25px 25px 20px;
			}
		}
		.project-tech-list {
			justify-content: flex-end;
			@media (max-width: 768px) {
				justify-content: flex-start;
			}
			li {
				margin: 0 0 5px 20px;
				@media (max-width: 768px) {
					margin: 0 10px 5px 0;
				}
			}
		}
		.project-links {
			justify-content: flex-end;
			margin-left: 0;
			margin-right: -10px;
			transition: var(--transition);
			@media (max-width: 768px) {
				justify-content: flex-start;
				margin-left: -10px;
				margin-right: 0;
			}
		}
		.project-image {
			grid-column: 1 / 8;
			@media (max-width: 768px) {
				grid-column: 1 / -1;
			}
		}
	}

	.project-content {
		grid-column: 1 / 7;
		grid-row: 1 / -1;
		@media (max-width: 1080px) {
			grid-column: 1 / 9;
		}
		@media (max-width: 768px) {
			grid-column: 1 / -1;
		}
	}

	.project-title {
		font-size: clamp(24px, 5vw, 28px);
		@media (max-width: 768px) {
			a {
				position: static;
        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
			}
		}
	}

	.project-image {
		
	}
`;

// &:hover,
// &:focus {
// 	box-shadow: 0 20px 30px -15px var(--slate);
// }
// Maybe play around with this later
const StyledProjectImage = styled.div`
  height: 100%;
  transition: var(--transition);
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.15;
  }
  a {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
    vertical-align: middle;
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      transition: var(--transition);
      mix-blend-mode: screen;
    }
  }
  .img {
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    @media (max-width: 768px) {
      object-fit: cover;
      width: auto;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(50%);
    }
  }
`;
const StyledDescription = styled.div`
  box-shadow: 0 10px 30px -15px var(--slate);
  transition: var(--transition);
  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px var(--slate);
  }
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  font-size: var(--fz-lg);
  @media (max-width: 768px) {
    padding: 20px 0;
    background-color: transparent;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        transition: var(--transition);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--green);
      transition: var(--transition);
      opacity: 0.5;
    }
  }
  strong {
    color: var(--white);
    font-weight: normal;
  }
`;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Featured = () => {
  const { data, error } = useSWR<FeaturedProjects>("/api/featured", fetcher);
  const revealTitle = useRef<HTMLHeadingElement>(null);
  const revealProjects = useRef<[HTMLLIElement | null]>([null]);
  const isSSR = useCheckSSR();
  useEffect(() => {
    const animate = async () => {
      if (!isSSR && revealTitle.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealTitle.current, config.srConfig());
      }
    };
    animate();
  }, [isSSR]);
  if (error) return <div>Unable to fetch Featured Projects</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <section id="projects">
        <h2 className="numbered-heading" ref={revealTitle}>
          {/* TODO: Add color to the text */}
          Some Things I&apos;ve Built
        </h2>
        <ul className="project-grid list-none p-0 m-0">
          {data &&
            data.map((project, index) => {
              const { frontmatter, content } = project;
              const { external, title, tech, github, cover, cta } = frontmatter;

              return (
                <>
                  <StyledProject
                    className="relative grid gap-2.5 grid-cols-12 items-center
											md:shadow-[0_10px_30px_-15px_var(--purple)] md:transition-all md:hover:shadow-[0_20px_30px_-15px_var(--purple)] md:focus:shadow-[0_20px_30px_-15px_var(--purple)]
											last-of-type:no
										"
                    key={index}
                    ref={(el) => (revealProjects.current[index] = el)}
                  >
                    <div
                      className="project-content relative
											md:flex md:flex-col md:justify-center md:h-full md:p-[40px_40px_40px] z-[3] md:z-[5]
											sm:p-[30px_25px_20px]
										"
                    >
                      <div>
                        <p className="project-overline z-[10] m-[10px_0] text-blue-400 dark:text-green font-mono text-sm font-normal">
                          Featured Project
                        </p>
                        <h3
                          className="project-title z-[10] text-blue-500
													md-min:m-[0_0_20px]
												"
                        >
                          {external && (
                            <Link href={external}>
                              <a>{title}</a>
                            </Link>
                          )}
                        </h3>
                        <StyledDescription
                          className="project-description bg-white dark:bg-slate text-blue-400 dark:text-teal-600 text-left whitespace-pre-wrap list-disc"
                          dangerouslySetInnerHTML={{ __html: content }}
                        ></StyledDescription>
                        {tech && tech.length && (
                          <ul
                            className="project-tech-list flex flex-wrap relative z-[2] m-[25px_0_10px] p-0 list-none
														md:m-[10px_0]
													"
                          >
                            {tech.map((tech, index) => (
                              <li
                                key={index}
                                className="m-[0_20px_5px_0] text-blue-400 dark:text-teal-600 font-mono text-sm whitespace-nowrap
																md:m-[0_10px_5px_0] md:text-blue-300 md:dark:text-teal-500"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="project-links z-[10] flex items-center relative p-[10px] mt-2.5 ml-[-10px] text-blue-300 dark:text-teal-500 transition-all">
                          {cta && (
                            <Link href={cta}>
                              <a
                                className="cta m-[10px] p-2.5 flex justify-center items-center transition-all"
                                aria-label="Course Link"
                              >
                                Learn More
                              </a>
                            </Link>
                          )}
                          {github && (
                            <Link href={github}>
                              <a className="p-1 transition-all">
                                <Icon
                                  name="GitHub"
                                  width="22px"
                                  height="22px"
                                />
                              </a>
                            </Link>
                          )}
                          {external && !cta && (
                            <Link href={external}>
                              <a className="p-1 transition-all">
                                <Icon
                                  name="External"
                                  width="22px"
                                  height="22px"
                                />
                              </a>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    <StyledProjectImage className="project-image transition-all -z-30">
                      <Link
                        href={external ? external : github ? github : "#"}
                        className="bg-purple dark:bg-green before:bg-purple before:dark:bg-green"
                      >
                        <a>
                          <Image
                            src={cover}
                            objectFit="contain"
                            layout="fill"
                            width={700}
                            height={400}
                            alt={title}
                            className="img"
                          />
                        </a>
                      </Link>
                    </StyledProjectImage>
                  </StyledProject>
                </>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default Featured;
