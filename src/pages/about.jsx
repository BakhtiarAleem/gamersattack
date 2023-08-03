import Head from 'next/head'
const About = () => {
    return (
        <div>
            <Head>
                <title>{`About | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>

            <div className="container">
                <div className="static-pages-body-padding">
                    <h1 className="static-pages-main-heading">About</h1>
                    <div className="default-card max-w-[768px] mobile:bg-none mobile:p-0">
                        <div className="static-pages">
                            <h5>Lorem ipsum dolor sit amet.</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque sed erat ut elit
                                tempor bibendum eget eget justo. Curabitur
                                tincidunt leo ac lorem facilisis, vitae aliquet
                                sem congue. Ut ultricies porttitor urna. Duis
                                eget purus luctus, porttitor mauris sed,
                                suscipit augue. Nullam porttitor mauris eget
                                vestibulum sodales. Etiam consectetur auctor
                                iaculis. Sed pharetra posuere ultrices.
                            </p>
                            <h5>
                                Nam non fermentum felis. Aenean malesuada quis
                                tellus vel rhoncus.
                            </h5>
                            <p>
                                Aliquam quis porttitor felis. In ut urna
                                vehicula, fringilla lorem et, mattis metus. Nam
                                ut felis rhoncus, vehicula turpis vitae,
                                fermentum nulla. Sed auctor, augue vel consequat
                                egestas, odio eros blandit dolor, eu
                                sollicitudin eros metus sit amet leo. Nam
                                fringilla sodales augue a fringilla. Etiam
                                laoreet at orci non fermentum. Ut vulputate diam
                                in accumsan elementum. Duis rhoncus, nibh a
                                pulvinar gravida, magna dui vestibulum dolor, in
                                mollis eros ex at ipsum. Nulla efficitur enim et
                                est consectetur, eu rhoncus nunc imperdiet.
                                Phasellus volutpat vel nisl ac placerat. Nulla
                                mollis sed nunc a sagittis.
                            </p>
                            <h5>
                                Fusce condimentum ultricies dictum. In hac
                                habitasse platea dictumst.
                            </h5>
                            <p>
                                Maecenas nec lobortis nunc, id eleifend ligula.
                                Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia curae;
                                Suspendisse luctus non nibh gravida interdum.
                                Morbi at sapien leo. Nullam vel tincidunt urna.
                                Nunc eu quam euismod, congue dolor sed,
                                imperdiet nunc. Duis a semper odio, volutpat
                                efficitur odio. Donec eu risus eget purus
                                finibus eleifend.
                            </p>
                            <h5>
                                Curabitur ullamcorper imperdiet ante a dapibus.
                            </h5>
                            <p>
                                Integer nunc mi, finibus sit amet finibus
                                placerat, placerat consectetur ipsum. Curabitur
                                quis ex sed magna venenatis pretium. Proin
                                ultricies faucibus nisi in porta. Maecenas vel
                                quam erat. In hac habitasse platea dictumst. Sed
                                dui felis, posuere ac blandit sed, viverra non
                                mauris. Cras eget diam sed enim dictum semper
                                sed nec eros. Aliquam sodales elit nec purus
                                tempor, non vehicula turpis tristique. Sed
                                lacinia tincidunt fermentum. Phasellus vitae
                                volutpat felis.
                            </p>
                            <h5>
                                Proin suscipit felis quis vehicula vestibulum.
                                Aliquam id dolor non nisl facilisis feugiat.
                            </h5>
                            <p>
                                Donec non orci leo. Phasellus sit amet massa
                                dictum, vehicula urna sed, blandit dolor.
                                Suspendisse tincidunt commodo quam, non accumsan
                                neque faucibus ultricies. Proin lacinia bibendum
                                volutpat. Vestibulum tempor faucibus nibh,
                                lobortis porttitor risus blandit et. Vivamus id
                                dolor ac neque pulvinar sodales.
                            </p>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Morbi vitae tellus quis sem
                                    viverra fermentum.
                                </li>
                                <li>
                                    Aenean congue lacus sit amet risus rhoncus,
                                    sed ultrices dolor egestas. Curabitur
                                    interdum sapien sed quam viverra, vitae
                                    pellentesque mauris maximus.
                                </li>
                                <li>
                                    Etiam tempor lacus id justo pharetra, nec
                                    bibendum risus rhoncus.
                                </li>
                            </ul>
                            <p>
                                Duis accumsan tincidunt placerat. Fusce at
                                eleifend mauris. Praesent ut lectus eget mi
                                feugiat ornare ut in magna. Aenean luctus sed
                                nulla a tincidunt. Vivamus vel tempus elit,
                                vitae posuere arcu. Sed non turpis ut magna
                                ultrices sollicitudin. Sed risus eros, aliquet
                                ac ante eu, malesuada convallis erat. Nullam vel
                                lacus eu nibh rutrum suscipit. Pellentesque eu
                                dictum ante. Nullam nec ipsum ac libero
                                ultricies rhoncus vitae at odio. Aliquam et quam
                                quis odio condimentum viverra. Vestibulum
                                bibendum sapien eu sapien bibendum convallis.
                                Nullam tincidunt leo non odio imperdiet, non
                                porttitor turpis aliquam. Pellentesque molestie,
                                nulla id dignissim pretium, mi mi tristique
                                arcu, sed condimentum tellus purus id mauris.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
