import '../styles.css'

export function Content() {
  return (
    <>
      <div className="apply-scrollbar class-selector">
        <h2>class-selector</h2>
        <p>
          <Text />
        </p>
      </div>

      <div className="apply-scrollbar" id="id-selector">
        <h2>id-selector</h2>
        <p>
          <Text />
        </p>
      </div>

      <div className="apply-scrollbar" data-testid="test-selector">
        <h2>other attributes</h2>
        <p>
          <Text />
        </p>
      </div>

      <div className="apply-scrollbar" id="fallback-position">
        <h2>fallback-position</h2>
        <ul>
          <li>
            Id qui labore pariatur enim quis exercitation. Laboris deserunt
          </li>
          <li>
            sint qui non reprehenderit ut aute veniam deserunt sint sint.
          </li>
          <li>
            Commodo enim fugiat sit sint aliquip magna adipisicing ex
            nostrud
          </li>
          <li>
            deserunt consequat sunt. Veniam sit aliquip minim ea consequat
            in
          </li>
          <li>
            do. Reprehenderit culpa commodo cillum minim. Nulla eiusmod qui
          </li>
          <li>
            consequat mollit et dolor id. Do cillum aute aliqua proident
          </li>
          <li>
            laborum proident sit reprehenderit velit. Nulla laborum mollit
            do
          </li>
          <li>
            sint laborum ad reprehenderit dolor cupidatat. Duis eiusmod
          </li>
          <li>
            exercitation adipisicing cillum fugiat dolor amet in enim elit.
          </li>
          <li>
            Veniam duis qui exercitation in cupidatat exercitation labore
          </li>
          <li>
            quis duis ullamco culpa est labore cillum. Cupidatat ad est
            quis
          </li>
          <li>
            culpa ullamco qui velit eu et ea ad tempor fugiat. In ea anim
            et
          </li>
          <li>
            anim deserunt mollit esse. Cillum voluptate ex adipisicing
          </li>
          <li>
            consectetur sunt commodo adipisicing. Incididunt magna aliqua
          </li>
          <li>
            consequat sunt id consectetur velit exercitation magna commodo
          </li>
          <li>
            sunt veniam. Duis proident exercitation enim exercitation
            ullamco
          </li>
          <li>
            laborum dolore proident nulla incididunt officia in labore.
          </li>
          <li>
            Mollit sit adipisicing do elit Lorem mollit ut. Sint commodo
          </li>
          <li>
            Lorem occaecat cillum anim ad do eiusmod aliquip adipisicing
          </li>
          <li>
            reprehenderit eu aliqua. Amet exercitation elit elit esse ex
          </li>
          <li>
            ipsum. In nisi aute laborum deserunt deserunt qui occaecat nisi
          </li>
          <li>
            minim. Duis pariatur ex do id reprehenderit enim ea aliqua
            veniam
          </li>
          <li>
            aliqua eu. Sit ea dolor laborum id velit sint exercitation
            tempor
          </li>
          <li className="scroll-to-me">Hello – I should be visible!</li>
          <li>
            veniam elit. Non aute enim aute veniam. Ex adipisicing occaecat
          </li>
          <li>
            ipsum exercitation anim commodo nostrud cupidatat ipsum
            pariatur
          </li>
          <li>
            et aute sit. Qui elit cillum consectetur incididunt laborum
          </li>
          <li>
            aliquip ullamco proident duis non cillum. Incididunt
            adipisicing
          </li>
          <li>
            mollit labore elit id ex cillum dolore pariatur. Ullamco id
            sunt
          </li>
          <li>
            dolore deserunt culpa eu. Officia amet anim sunt in eu
            consequat
          </li>
          <li>
            consectetur cupidatat ad irure eiusmod. Occaecat qui ex veniam
          </li>
          <li>
            culpa consequat incididunt esse. Occaecat consectetur cillum
          </li>
          <li>
            cupidatat adipisicing ad enim sint dolor enim nulla. Ut Lorem
          </li>
          <li>
            cupidatat mollit id esse consequat ex duis cupidatat et nisi
          </li>
          <li>
            cillum cupidatat. Occaecat amet Lorem dolor excepteur eiusmod.
            In
          </li>
          <li>
            amet duis tempor non ex sunt proident laboris tempor. Duis sit
          </li>
          <li>
            officia mollit labore elit veniam aliqua non minim excepteur
          </li>
          <li>
            minim. Anim excepteur id irure excepteur ex do dolore ad elit.
          </li>
          <li>
            Sint pariatur ut fugiat magna cupidatat exercitation excepteur.
          </li>
          <li>Irure qui exercitation officia adipisicing eiusmod in</li>
          <li>
            reprehenderit quis veniam ex dolore. Proident quis commodo
            Lorem
          </li>
          <li>irure tempor proident nulla.</li>
        </ul>
      </div>
    </>
  )
}

function Text() {
  return (
    <>
      Id qui labore pariatur enim quis exercitation. Laboris deserunt sint
      qui non reprehenderit ut aute veniam deserunt sint sint. Commodo enim
      fugiat sit sint aliquip magna adipisicing ex nostrud deserunt
      consequat sunt. Veniam sit aliquip minim ea consequat in do.
      Reprehenderit culpa commodo cillum minim. Nulla eiusmod qui consequat
      mollit et dolor id. Do cillum aute aliqua proident laborum proident
      sit reprehenderit velit. Nulla laborum mollit do sint laborum ad
      reprehenderit dolor cupidatat. Duis eiusmod exercitation adipisicing
      cillum fugiat dolor amet in enim elit. Veniam duis qui exercitation
      in cupidatat exercitation labore quis duis ullamco culpa est labore
      cillum. Cupidatat ad est quis culpa ullamco qui velit eu et ea ad
      tempor fugiat. In ea anim et anim deserunt mollit esse. Cillum
      voluptate ex adipisicing consectetur sunt commodo adipisicing.
      Incididunt magna aliqua consequat sunt id consectetur velit
      exercitation magna commodo sunt veniam. Duis proident exercitation
      enim exercitation ullamco laborum dolore proident nulla incididunt
      officia in labore. Mollit sit adipisicing do elit Lorem mollit ut.
      Sint commodo Lorem occaecat cillum anim ad do eiusmod aliquip
      adipisicing reprehenderit eu aliqua. Amet exercitation elit elit esse
      ex ipsum. In nisi aute laborum deserunt deserunt qui occaecat nisi
      minim. Duis pariatur ex do id reprehenderit enim ea aliqua veniam
      aliqua eu. Sit ea dolor laborum id velit sint exercitation tempor
      sint quis. Veniam do cillum officia culpa anim proident nulla veniam
      elit. Non aute enim aute veniam. Ex adipisicing occaecat ipsum
      exercitation anim commodo nostrud cupidatat ipsum pariatur et aute
      sit. Qui elit cillum consectetur incididunt laborum aliquip ullamco
      proident duis non cillum. Incididunt adipisicing mollit labore elit
      id ex cillum dolore pariatur. Ullamco id sunt dolore deserunt culpa
      eu. Officia amet anim sunt in eu consequat consectetur cupidatat ad
      irure eiusmod. Occaecat qui ex veniam culpa consequat incididunt
      esse. Occaecat consectetur cillum cupidatat adipisicing ad enim sint
      dolor enim nulla. Ut Lorem cupidatat mollit id esse consequat ex duis
      cupidatat et nisi cillum cupidatat. Occaecat amet Lorem dolor
      excepteur eiusmod. In amet duis tempor non ex sunt proident laboris
      tempor. Duis sit officia mollit labore elit veniam aliqua non minim
      excepteur minim. Anim excepteur id irure excepteur ex do dolore ad
      elit. Sint pariatur ut fugiat magna cupidatat exercitation excepteur.
      Irure qui exercitation officia adipisicing eiusmod in reprehenderit
      quis veniam ex dolore. Proident quis commodo Lorem irure tempor
      proident nulla.
    </>
  )
}
