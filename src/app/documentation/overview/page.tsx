export default function Overview() {
  return (
    <main className="flex min-h-screen flex-col items-left p-24 w-10/12 m-auto space-y-4 text-center">
      <div className="text-2xl font-bold">
        Welcome to the documentation! This is intended to be a guide to
        understand each component in our thesis project.
      </div>
      <br />
      <hr className="background-color: bg-black h-0.5" />
      <h2 id="about" className="text-2xl font-bold">
        Diagram
      </h2>
      <p>
        Below is a diagram that explains how our project works:
        <img
          src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/main/flow_chart.png?raw=true"
          alt="diagram for project steps."
        />
      </p>

      <div className="space-y-4">
        <hr className="background-color: bg-black h-0.5" />
        <h3 id="daily-python-script" className="text-2xl font-bold">
          Daily Python Script
        </h3>
        <p>
          Our daily Python script is the first part of our project. By using the
          Windows Task Scheduler, we can execute our Python code automatically
          at a specific time each day. The repository for our Python code is
          located <a href="https://github.com/sydneyetran/COCVAC_code">here</a>.{" "}
        </p>
        <p>There are two main jobs that our Python script completes:</p>
        <div className="flex flex-row py-5">
          <div className="w-1/2 px-5 ml-auto border-r-2 border-black text-center">
            <h4
              id="scraping-911-call-data-from-pdfs"
              className="text-xl font-bold"
            >
              Scraping 911 Call Data From PDFs
            </h4>
            <p>
              <a href="https://ocgov.net/departments/emergency-services/911-summary-report/">
                911 call data for Oneida County
              </a>{" "}
              is stored online. Everyday, a new PDF containing the previous
              day&#39;s call data is uploaded online. We scape these PDFs using
              with our Python code and a variety of Python libraries.{" "}
            </p>
          </div>

          <div className="w-1/2 px-5 ml-auto text-center">
            <h4 id="converting-pdfs-to-excel" className="text-xl font-bold">
              Converting PDFs to Excel
            </h4>
            <p>
              We need to convert the PDF data into a tabular form so that the
              data can be used later in Power BI. We are able to do this by
              using the following libraries: Tabula, Pandas, Openpyxl, Sysr,
              Requests, Pathlib, Bs4, and Openpyxl. Sys allows us to take the
              PDF file as an argument when running the code from the terminal.
              Tabula is used to read the PDF information. We use a template with
              Tabula so that no data is lost or missed in the conversion
              process. The Tabula objects are described as a list of Pandas
              Dataframes. We convert the Pandas dataframes into an Excel file.
              Openpyxl allows us to create an empty Excel file that is later
              edited when we add our 911 call data to the different cells. This
              is where the dataframe data is stored and at the end of this
              process, we have all of our 911 call data for the day stored in an
              Excel workbook. It is important to note that when working with
              Windows, the required version of tabula-py is 2.7, not 2.8 or
              newer.
            </p>
          </div>
        </div>
        <hr className="background-color: bg-black h-0.5" />
      </div>

      <div className="space-y-4">
        <h3 id="folder-storage" className="text-2xl font-bold">
          Folder Storage
        </h3>
        <p>
          Once the Excel Workbook with a day&#39;s 911 call data is created, it
          is added to a folder titled &quot;thesisexcels&quot;. This folder
          stores Excel worksheets. A new workbook is stored for each day of 911
          call data.
        </p>
        <hr className="background-color: bg-black h-0.5" />
      </div>

      <div className="space-y-4">
        <h3 id="power-bi-data-upload" className="text-2xl font-bold">
          Power BI Data Upload
        </h3>
        <p>
          The next step in the process is to import data into{" "}
          <a href="https://www.microsoft.com/en-us/power-platform/products/power-bi">
            Power BI
          </a>
          . Our original plan was to utilize{" "}
          <a href="https://learn.microsoft.com/en-us/rest/api/power-bi/">
            APIs from Power BI
          </a>{" "}
          to accomplish this. This would allow us to code everything; however,
          we were limited due to the fact that we only had a free Power BI
          account. We would have needed a Pro or Premium Per User (PPU) license
          in order to use the the APIs or anything with{" "}
          <a href="https://learn.microsoft.com/en-us/power-bi/developer/embedded/">
            Power BI Embedded Analytics
          </a>
          . As a result, we looked into alternative approaches and decided to
          use both a power query and personal gateway to upload data.
        </p>
        <div className="flex flex-row pt-10">
          <div className="w-1/2 ml-auto px-5 border-r-2 border-black">
            <h4 id="power-query" className="text-xl font-bold">
              Power Query
            </h4>
            <p>
              A{" "}
              <a href="https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview#power-query-editor">
                Power Query
              </a>{" "}
              can be used to connect reports to an external data source. We used
              a power query to pull data from our &quot;thesisexcels&quot;
              folder. As described above, this folder contains Excel workbooks
              that have daily Oneida County call data. Once the Power Query was
              configured, it was possible to use data pulled from Excels in
              Power BI reports.
            </p>
          </div>
          <div className="w-1/2 mr-auto px-5 ">
            <h4 id="personal-gateway" className="text-xl font-bold">
              Personal Gateway
            </h4>
            <p>
              We also utilize a{" "}
              <a href="https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode">
                personal gateway
              </a>{" "}
              for our data upload. This is a way to work with on-premise/
              locally stored data and get the data pulled to the cloud. A
              personal gateway is downloaded on the computer that has the
              locally stored Excels. When once a personal gateway is installed,
              it is possible to configure automatic refresh to update a Power BI
              report that is published online with locally made changes. Our
              automatic refresh is done on a daily basis. If we did not have our
              personal gateway configured, we would have to manually refresh in
              Power BI Desktop so that our published reports updated on the
              cloud each day with the new day&#39;s Excel data.
            </p>
          </div>
        </div>
        <hr className="background-color: bg-black h-0.5" />
      </div>

      <div className="space-y-4">
        <h3 id="power-bi-data-report" className="text-2xl font-bold">
          Power BI Data Report
        </h3>
        <p>
          Once the data is pulled into Power BI, it is possible to analyze and
          create charts/ maps to visualize the information. Once the report is
          built, it then can be published. Published reports can then be
          embedded into websites.
        </p>
        <br />
        <div className="flex flex-row pb-5">
          <div className="w-1/2 ml-auto px-5 ">
            <h4 id="maps" className="text-xl font-bold ">
              Maps
            </h4>
            <p>
              One big component of our project is our work with{" "}
              <a href="https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-map-tips-and-tricks">
                maps
              </a>
              . The 911 call data that we work with contains addresses, and our
              clients wanted us to create maps so that they could better see
              where their calls are located. We also wanted these maps to be
              filterable based on location so we encorporated that functionality
              into our reports.
            </p>
          </div>
          <div className="w-1/2 mr-auto px-5 border-l-2 border-black">
            <h4 id="charts" className="text-xl font-bold">
              Charts
            </h4>
            <p>
              Another large part of the reports are charts. We have bar charts
              and circles charts. These charts are interactive and can be
              filtered by users.
            </p>
          </div>
        </div>
        <hr className="background-color: bg-black h-0.5" />
      </div>

      <div className="space-y-4">
        <h3 id="the-user-interface" className="text-2xl font-bold">
          The User Interface
        </h3>
        <p>
          The main deliverable for this thesis project is our website. Our
          website is a centralized location to house Power BI reports,
          documentation, and other overview information.
        </p>
        <br />
        <div className="flex flex-row pt-10">
          <div className="w-1/3 px-5 ml-auto text-center">
            <h4 id="the-report" className="text-xl font-bold">
              The Report
            </h4>
            <p>
              By exporting our report as an iframe, it is possible to embed it
              directly into our website. We also had to configure other settings
              to make these reports public and possible to embed in our website.
            </p>
            <br />
          </div>

          <div className="w-1/3 px-1 ml-auto text-center px-5 border-l-2 border-black">
            <h4 id="the-url" className="text-xl font-bold">
              The URL
            </h4>
            <p>
              We are currently hosting our{" "}
              <a href="https://cocvac-hamilton2023.github.io/thesis_ui/">
                website
              </a>{" "}
              using Github Pages. This is possible since all of our code is
              stored{" "}
              <a href="https://github.com/cocvac-hamilton2023/thesis_ui/">
                on Github
              </a>
              .
            </p>
            <br />
          </div>

          <div className="w-1/3 px-1 ml-auto text-center px-5 border-l-2 border-black">
            <h4 id="the-code" className="text-xl font-bold">
              The Code
            </h4>
            <p>
              We are working with the <a href="https://react.dev/">React</a>{" "}
              library, <a href="https://www.typescriptlang.org/">Typescript</a>{" "}
              (a typed version of Javascript),{" "}
              <a href="https://nextjs.org/">Next.js</a> (a React framework), and{" "}
              <a href="https://tailwindcss.com/">Tailwind CSS</a> (a CSS
              framework). A large reason we chose this tech stack is because
              these technologies are widely used in the industry and are
              powerful tools for building user interfaces.
            </p>
          </div>
        </div>
        <hr className="background-color: bg-black h-0.5" />
      </div>
    </main>
  );
}
