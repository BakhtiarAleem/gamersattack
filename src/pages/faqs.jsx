import Head from 'next/head'
import { Tab } from '@headlessui/react'
import map from 'lodash/map'
import { Fade } from 'react-awesome-reveal'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion'

const faqs = [
    {
        questions: [
            {
                question: 'Lorem ipsum dolor sit amet?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed erat ut elit tempor bibendum eget eget justo. Curabitur tincidunt leo ac lorem facilisis, vitae aliquet sem congue. Ut ultricies porttitor urna. Duis eget purus luctus, porttitor mauris sed, suscipit augue. Nullam porttitor mauris eget vestibulum sodales. Etiam consectetur auctor iaculis. Sed pharetra posuere ultrices.',
            },
            {
                question:
                    'Nam non fermentum felis. Aenean malesuada quis tellus vel rhoncus?',
                answer: 'Aliquam quis porttitor felis. In ut urna vehicula, fringilla lorem et, mattis metus. Nam ut felis rhoncus, vehicula turpis vitae, fermentum nulla. Sed auctor, augue vel consequat egestas, odio eros blandit dolor, eu sollicitudin eros metus sit amet leo. Nam fringilla sodales augue a fringilla. Etiam laoreet at orci non fermentum. Ut vulputate diam in accumsan elementum. Duis rhoncus, nibh a pulvinar gravida, magna dui vestibulum dolor, in mollis eros ex at ipsum. Nulla efficitur enim et est consectetur, eu rhoncus nunc imperdiet. Phasellus volutpat vel nisl ac placerat. Nulla mollis sed nunc a sagittis.',
            },
            {
                question:
                    'Fusce condimentum ultricies dictum. In hac habitasse platea dictumst?',
                answer: 'Maecenas nec lobortis nunc, id eleifend ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse luctus non nibh gravida interdum. Morbi at sapien leo. Nullam vel tincidunt urna. Nunc eu quam euismod, congue dolor sed, imperdiet nunc. Duis a semper odio, volutpat efficitur odio. Donec eu risus eget purus finibus eleifend.',
            },
            {
                question: 'Curabitur ullamcorper imperdiet ante a dapibus?',
                answer: 'Integer nunc mi, finibus sit amet finibus placerat, placerat consectetur ipsum. Curabitur quis ex sed magna venenatis pretium. Proin ultricies faucibus nisi in porta. Maecenas vel quam erat. In hac habitasse platea dictumst. Sed dui felis, posuere ac blandit sed, viverra non mauris. Cras eget diam sed enim dictum semper sed nec eros. Aliquam sodales elit nec purus tempor, non vehicula turpis tristique. Sed lacinia tincidunt fermentum. Phasellus vitae volutpat felis.',
            },
            {
                question:
                    'Proin suscipit felis quis vehicula vestibulum. Aliquam id dolor non nisl facilisis feugiat?',
                answer: 'Donec non orci leo. Phasellus sit amet massa dictum, vehicula urna sed, blandit dolor. Suspendisse tincidunt commodo quam, non accumsan neque faucibus ultricies. Proin lacinia bibendum volutpat. Vestibulum tempor faucibus nibh, lobortis porttitor risus blandit et. Vivamus id dolor ac neque pulvinar sodales.',
            },
            {
                question: 'Lorem ipsum dolor sit amet?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed erat ut elit tempor bibendum eget eget justo. Curabitur tincidunt leo ac lorem facilisis, vitae aliquet sem congue. Ut ultricies porttitor urna. Duis eget purus luctus, porttitor mauris sed, suscipit augue. Nullam porttitor mauris eget vestibulum sodales. Etiam consectetur auctor iaculis. Sed pharetra posuere ultrices.',
            },
            {
                question:
                    'Proin suscipit felis quis vehicula vestibulum. Aliquam id dolor non nisl facilisis feugiat?',
                answer: 'Donec non orci leo. Phasellus sit amet massa dictum, vehicula urna sed, blandit dolor. Suspendisse tincidunt commodo quam, non accumsan neque faucibus ultricies. Proin lacinia bibendum volutpat. Vestibulum tempor faucibus nibh, lobortis porttitor risus blandit et. Vivamus id dolor ac neque pulvinar sodales.',
            },
            {
                question:
                    'Nam non fermentum felis. Aenean malesuada quis tellus vel rhoncus?',
                answer: 'Aliquam quis porttitor felis. In ut urna vehicula, fringilla lorem et, mattis metus. Nam ut felis rhoncus, vehicula turpis vitae, fermentum nulla. Sed auctor, augue vel consequat egestas, odio eros blandit dolor, eu sollicitudin eros metus sit amet leo. Nam fringilla sodales augue a fringilla. Etiam laoreet at orci non fermentum. Ut vulputate diam in accumsan elementum. Duis rhoncus, nibh a pulvinar gravida, magna dui vestibulum dolor, in mollis eros ex at ipsum. Nulla efficitur enim et est consectetur, eu rhoncus nunc imperdiet. Phasellus volutpat vel nisl ac placerat. Nulla mollis sed nunc a sagittis.',
            },
            {
                question:
                    'Fusce condimentum ultricies dictum. In hac habitasse platea dictumst?',
                answer: 'Maecenas nec lobortis nunc, id eleifend ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse luctus non nibh gravida interdum. Morbi at sapien leo. Nullam vel tincidunt urna. Nunc eu quam euismod, congue dolor sed, imperdiet nunc. Duis a semper odio, volutpat efficitur odio. Donec eu risus eget purus finibus eleifend.',
            },
            {
                question: 'Curabitur ullamcorper imperdiet ante a dapibus?',
                answer: 'Integer nunc mi, finibus sit amet finibus placerat, placerat consectetur ipsum. Curabitur quis ex sed magna venenatis pretium. Proin ultricies faucibus nisi in porta. Maecenas vel quam erat. In hac habitasse platea dictumst. Sed dui felis, posuere ac blandit sed, viverra non mauris. Cras eget diam sed enim dictum semper sed nec eros. Aliquam sodales elit nec purus tempor, non vehicula turpis tristique. Sed lacinia tincidunt fermentum. Phasellus vitae volutpat felis.',
            },
        ],
    },
]

const Faqs = (open) => {
    return (
        <div>
            <Head>
                <title>{`Faqs | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>
            <Tab.Group>
                <div className="container">
                    <div className="static-pages-body-padding">
                        <h1 className="static-pages-main-heading mb-6">
                            FAQ&apos;s
                        </h1>

                        <div className="default-card max-w-[768px] shadow-none mobile:bg-none mobile:p-0">
                            <div className="static-pages">
                                <div className="mobile:mt[48px] absolute left-0 right-0 top-[-140px] mx-auto">
                                    <div className="container z-10">
                                        <div>
                                            <Fade
                                                triggerOnce
                                                damping={0.5}
                                                cascade
                                            >
                                                <Tab.List className="tabselection tablet:block tablet:text-center flex gap-x-4">
                                                    {map(
                                                        faqs,
                                                        (item, index) => (
                                                            <Tab
                                                                key={index}
                                                                className="tabitem tablet:mx-1 tablet:my-2 tablet:inline-block tablet:w-[31%] flex-shrink flex-grow basis-auto border-none outline-none mobile:w-[47%]"
                                                            >
                                                                {({
                                                                    selected,
                                                                }) => (
                                                                    <div
                                                                        className={
                                                                            selected
                                                                                ? 'activetab outline-0'
                                                                                : 'outline-0'
                                                                        }
                                                                    >
                                                                        <div
                                                                            className={`tabbtn ${
                                                                                selected
                                                                                    ? 'grediant-bg'
                                                                                    : ''
                                                                            }`}
                                                                        >
                                                                            {item.heading && (
                                                                                <span className="text-[16px]">
                                                                                    {
                                                                                        item.heading
                                                                                    }
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Tab>
                                                        )
                                                    )}
                                                </Tab.List>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section>
                                <div className="relative">
                                    <div className="container z-10">
                                        <Tab.Panels>
                                            {faqs.map((item, index) => (
                                                <Tab.Panel key={index}>
                                                    <Fade
                                                        triggerOnce
                                                        cascade
                                                        damping={0.2}
                                                    >
                                                        {item.heading && (
                                                            <h3 className="mb-8 text-center">
                                                                {item.heading}
                                                            </h3>
                                                        )}
                                                    </Fade>
                                                    <div className="question-answers">
                                                        <Accordion>
                                                            {item.questions.map(
                                                                (
                                                                    list,
                                                                    questionindex
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            questionindex
                                                                        }
                                                                        className="relative mb-3 block w-full rounded-md bg-theme-dark-900 px-3 py-1 shadow last-of-type:mb-0 mobile:bg-interface-800"
                                                                    >
                                                                        <Fade
                                                                            triggerOnce
                                                                            cascade
                                                                            damping={
                                                                                0.7
                                                                            }
                                                                        >
                                                                            <AccordionItem>
                                                                                <AccordionItemHeading>
                                                                                    <AccordionItemButton
                                                                                        className={`${'py-2 pr-8 text-base font-medium text-interface-100'}`}
                                                                                    >
                                                                                        {
                                                                                            list.question
                                                                                        }
                                                                                        <div
                                                                                            className={`${'absolute right-3 top-[14px] text-[8px] text-interface-100'}`}
                                                                                        >
                                                                                            <i className="icon-down-arrow"></i>
                                                                                        </div>
                                                                                    </AccordionItemButton>
                                                                                </AccordionItemHeading>
                                                                                <AccordionItemPanel className="text-gray-500 py-4 pt-1 text-sm text-interface-100">
                                                                                    {
                                                                                        list.answer
                                                                                    }
                                                                                </AccordionItemPanel>
                                                                            </AccordionItem>
                                                                        </Fade>
                                                                    </div>
                                                                )
                                                            )}
                                                        </Accordion>
                                                    </div>
                                                </Tab.Panel>
                                            ))}
                                        </Tab.Panels>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </Tab.Group>
        </div>
    )
}
export default Faqs
