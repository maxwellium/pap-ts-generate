<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns="http://www.w3.org/1999/xhtml"
	xmlns:date="http://exslt.org/dates-and-times"
    extension-element-prefixes="date">
	<xsl:output method="text" indent="no" encoding="UTF-8" />

	<xsl:template match="/PAP">
import { BigDecimal } from 'bigdecimal';
import { PAPBaseClass } from '../PAPBaseClass';

export interface Inputs {
<xsl:for-each select="./VARIABLES/INPUTS/INPUT">
	<xsl:if test="preceding-sibling::comment()[count(following-sibling::*[1]|current()) = 1]">
	/**<xsl:value-of select="preceding-sibling::comment()[1]" />*/
	</xsl:if>
	<xsl:value-of select="./@name" /> : <xsl:choose><xsl:when test="@type='BigDecimal'">BigDecimal</xsl:when><xsl:otherwise>number</xsl:otherwise></xsl:choose>;
</xsl:for-each>
};

export interface Outputs {
<xsl:for-each select="./VARIABLES/OUTPUTS/OUTPUT">
	<xsl:if test="preceding-sibling::comment()[count(following-sibling::*[1]|current()) = 1]">
	/**<xsl:value-of select="preceding-sibling::comment()[1]" />*/
	</xsl:if>
	<xsl:value-of select="./@name" /> : <xsl:choose><xsl:when test="@type='BigDecimal'">BigDecimal</xsl:when><xsl:otherwise>number</xsl:otherwise></xsl:choose>;
</xsl:for-each>
};

export interface Internals {
<xsl:for-each select="./VARIABLES/INTERNALS/INTERNAL">
	<xsl:if test="preceding-sibling::comment()[count(following-sibling::*[1]|current()) = 1]">
		/**<xsl:value-of select="preceding-sibling::comment()[1]" />*/
	</xsl:if>
	<xsl:value-of select="./@name" /> : <xsl:choose><xsl:when test="@type='BigDecimal'">BigDecimal</xsl:when><xsl:otherwise>number</xsl:otherwise></xsl:choose>;
</xsl:for-each>
};

<xsl:apply-templates select="./CONSTANTS" />

export class <xsl:value-of select="./@name" /> extends PAPBaseClass&lt;Inputs, Outputs, Internals&gt; {

<xsl:for-each select="./CONSTANTS/CONSTANT">	static readonly <xsl:value-of select="./@name" /> = <xsl:value-of select="./@name" />;
</xsl:for-each>

	public name = '<xsl:value-of select="./@name" />';
	public _inputs = {<xsl:for-each select="./VARIABLES/INPUTS/INPUT">
		<xsl:call-template name="variables" />
	</xsl:for-each>
	};
	public _outputs = {<xsl:for-each select="./VARIABLES/OUTPUTS/OUTPUT">
		<xsl:call-template name="variables" />
	</xsl:for-each>
	};
	public _internals = {<xsl:for-each select="./VARIABLES/INTERNALS/INTERNAL">
		<xsl:call-template name="variables" />
	</xsl:for-each>
	};

//--methodsstart

	<xsl:apply-templates select="./METHODS" />

//--methodsend

}

/*--replaceBlock
<xsl:for-each select="./VARIABLES/INPUTS/INPUT">(\W)<xsl:value-of select="./@name" />(\W):this._inputs.<xsl:value-of select="./@name" />*</xsl:for-each>
<xsl:for-each select="./VARIABLES/OUTPUTS/OUTPUT">(\W)<xsl:value-of select="./@name" />(\W):this._outputs.<xsl:value-of select="./@name" />*</xsl:for-each>
<xsl:for-each select="./VARIABLES/INTERNALS/INTERNAL">(\W)<xsl:value-of select="./@name" />(\W):this._internals.<xsl:value-of select="./@name" />*</xsl:for-each>
<xsl:for-each select="./METHODS/METHOD">(\W)<xsl:value-of select="./@name" />(\(\);):this.<xsl:value-of select="./@name" />*</xsl:for-each>
*/
	</xsl:template>


	<xsl:template match="CONSTANT">export const <xsl:value-of select="./@name" /> = <xsl:value-of select="translate(./@value,'{}','[]')" />;</xsl:template>
	<xsl:template match="MAIN">main() {<xsl:apply-templates select="child::node()" />}</xsl:template>
	<xsl:template match="METHOD"><xsl:value-of select="./@name" />() {<xsl:apply-templates select="child::node()" />}</xsl:template><xsl:template match="EXECUTE"><xsl:value-of select="./@method" />();</xsl:template>
	<xsl:template match="EVAL"><xsl:value-of select="./@exec" />;</xsl:template>
	<xsl:template match="IF">if (<xsl:value-of select="./@expr" />) {<xsl:apply-templates select="child::node()" />}</xsl:template>
	<xsl:template match="THEN"><xsl:apply-templates select="child::node()" /></xsl:template>
	<!-- Standard case: <IF><THEN>...</THEN><ELSE>...</ELSE></IF> -->
	<xsl:template match="ELSE[parent::IF]">} else {<xsl:apply-templates select="child::node()" /></xsl:template>
	<!-- Bug case: <IF><THEN>...</THEN></IF><ELSE>...</ELSE> -->
	<xsl:template match="ELSE[not(parent::IF)]"> else {<xsl:apply-templates select="child::node()" />}</xsl:template>
	<xsl:template match="comment()">/** <xsl:value-of select="."/> */</xsl:template>

	<xsl:template name="variables"><xsl:text>
		</xsl:text><xsl:value-of select="./@name" /> : <xsl:choose><xsl:when test="@default and string-length(@default)>0"><xsl:value-of select="./@default" /></xsl:when><xsl:when test="@type='BigDecimal'">new BigDecimal(0)</xsl:when><xsl:otherwise>0</xsl:otherwise></xsl:choose>,</xsl:template>


</xsl:stylesheet>
