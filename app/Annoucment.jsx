import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
    return (
        <div className=" text-center items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <p className="text-sm leading-6 text-white">
                <a href="https://www.t.me/whaleping">
                    <strong className="font-semibold">Join Close Beta Channel</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    Our project is in the development process. It will be opened on September 1.&nbsp;<span aria-hidden="true"></span>
                </a>
            </p>

        </div>
    )
}
