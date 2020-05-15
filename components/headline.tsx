import { useMemo, useCallback, FC } from "react"

import { Router, withRouter } from 'next/router'

import cn from 'classnames';

const Headline: FC<{ router: Router }> = ({ router }) => {

    const isActiveRoute = useCallback((path: string) => {
        return router.pathname === path;
    }, []);


    return (
        <nav className="flex items-center justify-between flex-wrap bg-secondary p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Pect Projects</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-white-200 border-secondary-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="/" className={
                        cn(
                            "block mt-4 lg:inline-block lg:mt-0 mr-4",
                            {
                                "text-white": !isActiveRoute("/"),
                                "text-highlight underline": isActiveRoute("/")
                            }
                        )}
                    >
                        Home
                    </a>
                    <a href="/posts" className={
                        cn(
                            "block mt-4 lg:inline-block lg:mt-0 mr-4",
                            {
                                "text-white": !isActiveRoute("/posts"),
                                "text-highlight underline": isActiveRoute("/posts")
                            }
                        )}>
                        Posts
                    </a>
                    <a href="/about" className={
                        cn(
                            "block mt-4 lg:inline-block lg:mt-0 mr-4",
                            {
                                "text-white": !isActiveRoute("/about"),
                                "text-highlight underline": isActiveRoute("/about")
                            }
                        )}>
                        About
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Headline);