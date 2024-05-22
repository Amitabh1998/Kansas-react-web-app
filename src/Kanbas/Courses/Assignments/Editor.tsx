export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
            <select id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          
            </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
            <select id="wd-display-grade-as">
            <option value="Percentage">Percentage</option>
          </select>            
            </td>
          </tr>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
            <select id="wd-submission-type">
            <option value="Percentage">Online</option>
          </select>

          <td align="right" valign="top">
          <label htmlFor="wd-text-entry">Online Entry Options</label>
          </td>
          <tr>
              <input id="wd-text-entry" type='checkbox' />
              <label htmlFor="wd-text-entry">Text Entry</label>
          </tr>
          
          <tr>
            <input id="wd-website-url" type='checkbox' />
            <label htmlFor="wd-website-url">Website URL</label>
          </tr>
        
          <tr>
            <input id="wd-media-recordings" type='checkbox' />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </tr>

          <tr>
            <input id="wd-student-annotation" type='checkbox' />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </tr>


          <tr>
            <input id="wd-file-upload" type='checkbox' />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </tr>

            </td>
            

          </tr>

          <tr>
            <td>
            <label htmlFor="wd-assign-to">Assign</label>&nbsp;
            <label htmlFor="wd-assign-to">Assign to</label>
            <tr>
            <input id="wd-assign-to" value="Everyone"/>
            </tr>

            </td>
            

          </tr>


          <tr>
            <td>
            <label htmlFor="wd-due-date">Due</label>
            <tr>
            <input id="wd-due-date" type="date"/>
            </tr>

            </td>
            

          </tr>

          <tr>
            <td>
            <label htmlFor="wd-available-from">Available from</label>
            <tr>
            <input id="wd-available-from" type="date"/>
            </tr>
            </td>

            <td>
            <label htmlFor="wd-available-until">Until</label>
            <tr>
            <input id="wd-available-until" type="date"/>
            </tr>
            </td>
          </tr>
          <tr>
          <button>cancel</button>&nbsp;
          <button>save</button>
          </tr>
          {/* Complete on your own */}
        </table>
      </div>
  );}
  