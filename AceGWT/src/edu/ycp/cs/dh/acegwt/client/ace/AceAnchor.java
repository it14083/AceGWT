/**
 * 
 */
package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Java representation of an ace anchor as returned from doc.createAnchor().
 *
 */

public class AceAnchor {
	private final JavaScriptObject anchor;

	public AceAnchor(JavaScriptObject anchor) {
		this.anchor = anchor;
	}

	public int getRow() {
		return getRowFromAnchor(this.anchor);
	}

	public int getColumn() {
		return getColumnFromAnchor(this.anchor);
	}

	private native int getRowFromAnchor(JavaScriptObject anchor) /*-{
		return anchor.row;
	}-*/;

	private native int getColumnFromAnchor(JavaScriptObject anchor) /*-{
		return anchor.column;
	}-*/;
}
